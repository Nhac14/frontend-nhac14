import http from './config';

const getSong = (userId, songId) => {

    return http.get(`users/${userId}/songs/${songId}`);
}

const createSong = (data) => {
    return http.post(``);
}

const getAllVideo = () => {
    return http.get('songs');
}

const getSongById = (songId, userToken) => {
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