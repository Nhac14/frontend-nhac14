import http from './config';

const getAllSinger = () => {
    let select='_id,name';
    return http.get(`/singers?page=1&limit=100&select=${select}`);
}

const getById = (singerId) => {
    return http.get(`/singers/${singerId}`);
}

export default {
    getAllSinger,
    getById
}