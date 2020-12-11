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

const getSongs = (page, limit) => {
    return http.get(`songs?page=${page}&limit=${limit}`);
}

const getAllSongAsync = async () => {
    return await http.get('songs');
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
    getAllSongAsync,
    createSong,
    getSong,
    getAllVideo,
    getSongById,
    getSongs,

}