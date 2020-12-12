import http from './config';

const getSong = (userId, songId) => {

    return http.get(`users/${userId}/songs/${songId}`);
}

const createSong = (data, accesstoken) => {
    return http.post('admin/songs', data, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
            
        }
    });
}

const getAllVideo = (page, limit) => {
    let select="cover_image,name,_id";
    return http.get(`songs?page=${page}&limit=${limit}&select=${select}`);
}

const getSongs = (page, limit, filterType) => {
    if(filterType != null && filterType.length == 1){
        console.log("OKKKK");
        return http.get(`songs?page=${page}&limit=${limit}&type=${filterType[0]}`);
    }
    else
        return http.get(`songs?page=${page}&limit=${limit}`);
}

const getSongById = (songId, userToken) => {
    console.log("token axios ", userToken);
    let token = userToken ? userToken : "";
    return http.get(`users/songs/${songId}`, {
        headers: {
            'Bearer': token
        }
    });
}

export default {
    createSong,
    getSong,
    getAllVideo,
    getSongById,
    getSongs,

}