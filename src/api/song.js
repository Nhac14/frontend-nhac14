import http from './config';

const getSong = (userId, songId) => {

    return http.get(`users/${userId}/songs/${songId}`);
}

const createSong = (data) => {
    return http.post(``);
}

const getAllVideo = (page, limit) => {
    let select="cover_image,name,_id";
    return http.get(`songs?page=${page}&limit=${limit}&select=${select}`);
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

    getSong,
    getAllVideo,
    getSongById

}