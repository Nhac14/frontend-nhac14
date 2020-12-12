import http from './config';

const getHistory = (userId, token) => {
    return http.get(`histories/${userId}`, {
        headers: {
            'Bearer': token
        }
    });
}

const deleteHistory = (userId, token) => {
    return http.delete(`histories/${userId}`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export default {
    getHistory,
    deleteHistory
}