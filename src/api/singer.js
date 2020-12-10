import http from './config';

const getAllSinger = () => {
    return http.get('/singers');
}

const getById = (singerId) => {
    return http.get(`/singers/${singerId}`);
}

export default {
    getAllSinger,
    getById
}