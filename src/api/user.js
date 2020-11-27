import http from './config';

const login = async (data) => {
    return await http.post('users/login', data, {
        headers: {
            'Content-Type': "application/json"
        }
    })
}



export default {
    login,

}