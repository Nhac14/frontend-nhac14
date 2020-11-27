import http from './config';

const getSong = (userId, songId) => {

    return http.get(`users/${userId}/songs/${songId}`);
}

export default {

    getSong,
    

}