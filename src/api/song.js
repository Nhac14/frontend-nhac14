import http from './config';

const getSong = (userId, songId) => {

    return http.get(`users/${userId}/songs/${songId}`);
}

const createSong = (data) => {
    return http.post(``);
}



export default {

    getSong,
    

}