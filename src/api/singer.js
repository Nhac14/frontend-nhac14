import http from './config';

const getAllSinger = (page, limit) => {
        let select="name,gender,age,favorites,avatar,_id";
       return http.get(`singers?page=${page}&limit=${limit}&select=${select}`);
    }
const createSinger = (data, accesstoken) => {
    return http.post('admin/singers', data, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
            
        }
    });
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
const deleteSinger = (singerId,accesstoken)  => {
    return http.delete(`/admin/singers/${singerId}`,singerId,{
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
            
        }
    });
}

export default {
    getAllSinger,
    createSinger,
    getAllSingerAsync,
    getByIdAsync,
    getById,
    deleteSinger

}