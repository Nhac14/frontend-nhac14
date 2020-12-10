import http from './config';

const getAllSinger = (page, limit) => {
        let select="name,gender,age,favorites,avatar,_id";
        
       const response = http.get(`singers?page=${page}&limit=${limit}&select=${select}`);
       let result = [];

        response.data.forEach(function(element, index){
        const abl = {
            key: index,
            name: element.name,
            gender: element.gender,
            age: element.age,
            favorites: element.favorites,
            avatar: element.avatar,
        }
        console.log(response);
        debugger
        result.push(abl);
        
    })

    debugger
    return result;
    }

const getById = (singerId) => {
    return http.get(`/singers/${singerId}`);
}

export default {
    getAllSinger,
    getById
}