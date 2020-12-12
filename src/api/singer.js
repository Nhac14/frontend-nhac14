import http from './config';

const getAllSinger = () => {
    return http.get('/singers/:singerId');
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