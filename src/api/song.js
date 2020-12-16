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

const getAllSongAsync = async () => {
    return await http.get('songs');
}

const getSongById = (songId, userToken) => {
    let token = userToken ? userToken : "";
    return http.get(`users/songs/${songId}`, {
        headers: {
            'Authorization': token
        }
    });
}

export default {
    getAllSongAsync,
    getSong,
    getAllVideo,
    getSongById

}