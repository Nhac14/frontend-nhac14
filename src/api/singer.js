import http from './config';

const getAllSinger = (page, limit) => {
        let select="name,gender,age,favorites,avatar,_id";
       return http.get(`singers?page=${page}&limit=${limit}&select=${select}`);
    }

const getById = (singerId) => {
    return http.get(`/singers/${singerId}`);
}

export default {
    getAllSinger,
    getById
}