import http from './config';
import category from './category';
import singer from './singer';
import song from './song';

const getListAlbum = async (filter) => {
    let url = 'albums';
    if (!filter.page)
        url = url.concat('?page=' + filter.page);
    else
        url = url.concat('?page=0');
    if (!filter.sort)
        url = url.concat('&&sort=' + filter.sort);
    if (!filter.limit)
        url = url.concat('&&limit=' + filter.limit);
    const response = await http.get(url);
    const singers = await singer.getAllSingerAsync();
    const categories = await category.getAllCategory();
    const songs = await song.getAllSongAsync();

    let result = {};

    let temp = [];

    response.data.results.forEach(async function (element, index) {
        let singerList = [];
        let categoryList = [];
        let songList = [];

        singerList = singers.data.data.filter(e => {
            const singersJson = element.singers.map(e => JSON.parse(e));

            return singersJson.some(el => el._id === e._id);
            
        }).map((value, index) => {
            if(index == 0){
                return value.name;
            }
            return ", "+value.name;
        });

        
        categoryList = categories.data.data.filter(e => {
            const categoriesJson = element.category.map(e => JSON.parse(e));
            
            return categoriesJson.some(el => el._id === e._id);
            
        }).map((value, index) => {
            if(index == 0){
                return value.name;
            }
            return ", "+value.name;
        });

        songList = songs.data.results.filter(e => {
            const songsJson = element.musicList.map(e => JSON.parse(e));
            
            return songsJson.some(el => el._id === e._id);
            
        }).map((value, index) => {
            if(index == 0){
                return value.name;
            }
            return ", "+value.name;
        });
        

        const abl = {
            key: index,
            name: element.name,
            description: element.description,
            category: categoryList,
            singer: singerList,
            createdAt: element.createdDate,
            modifiedAt: element.modifiedDate,
            song: songList,
            id: element._id
        }

        temp.push(abl);

    })

    result.data = response.data.results;
    result.dataDisplay = temp;

    return result;
}

const deleteAlbumById = (id, userToken) => {
    return http.delete(`admin/albums/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    })
}
const getAlbumList = (page, limit) => {
    let select="cover_image,name,_id";
    return http.get(`albums?page=${page}&limit=${limit}&select=${select}`);
}

const getAlbumById = (albumId) => {
    return http.get(`albums/${albumId}`);
}

const createAlbum = (data, accesstoken) => {
    return http.post('admin/albums', data, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
        }
    });
}

const editAlbum = (id, token, data) => {
    return http.put(`admin/albums/${id}`,data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
}

const editCoverImage = (id, data, token) => {
    return http.put(`admin/albums/updateCoverImage/${id}`, data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
}

export default {
    getAlbumList,
    getAlbumById,
    getListAlbum,
    deleteAlbumById,
    createAlbum,
    editAlbum,
    editCoverImage
}