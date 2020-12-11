import http from './config';
import category from './category';
import singer from './singer';

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


    debugger
    let result = {};

    let temp = [];

    response.data.results.forEach(async function (element, index) {
        let singerList = [];
        let categoryList = [];

        // const getName = async () => {
        //     if (element.singers.length > 0) {
        //         element.singers.forEach(async e => {
        //             const sn = await singer.getByIdAsync(e);
        //             singerList.push(sn.data.result.singer.name);
        //             debugger
        //         });
        //     }

        //     if (element.category.length > 0) {
        //         element.category.forEach(async e => {
        //             const sn = await category.getByIdAsync(e);
        //             categoryList.push(sn.data.result.category.name);
        //         });
        //     }
        // }

        // await getName();

        singerList = singers.data.data.filter(e => (
            element.singers.includes(e._id)
        )).map((value, index) => {
            if(index == 0){
                return value.name;
            }
            return ", "+value.name;
        });

        categoryList = categories.data.data.filter(e => (
            element.category.includes(e._id)
        )).map((value, index) => {
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
            modifiedAt: element.modifiedDate
        }

        debugger

        temp.push(abl);

    })

    result.data = response.data.results;
    result.dataDisplay = temp;
    return result;
}

const deleteAlbumById = async (id, userToken) => {
    let token = userToken ? userToken : "";
    // const response = await http.delete("albums")
}
const getAlbumList = (page, limit) => {
    let select="cover_image,name,_id";
    return http.get(`albums?page=${page}&limit=${limit}&select=${select}`);
}

const getAlbumById = (albumId) => {
    return http.get(`albums/${albumId}`);
}

export default {
    getAlbumList,
    getAlbumById,
    getListAlbum
}