import http from './config';

const getAllSinger = () => {
    let select='_id,name';
    return http.get(`/singers?page=1&limit=100&select=${select}`);
}

const getById = (singerId) => {
    return http.get(`/singers/${singerId}`);
}

const getAllSingerAsync = async () => {
    return await http.get('/singers');
}

const getByIdAsync = async (singerId) => {
    return await http.get(`/singers/${singerId}`);
}

export default {
    getAllSinger,
    getById,
    getAllSingerAsync,
    getByIdAsync
}