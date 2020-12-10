import http from './config';

const login = (data) => {
    return http.post('users/login', data, {
        headers: {
            'Content-Type': "application/json"
        }
    })
}

const register = (data) => {
    return http.post('users/register', data, {
        headers: {
            'Content-Type': "application/json"
        }
    })
}

const register = (data) => {
    return http.post('users/register', data, {
        headers: {
            'Content-Type': "application/json"
        }
    })
}


const getUserInfo = (token) => {
    return http.get('users', {
        headers: {
            'Bearer': token
        }
    })
}


const getUserInfo = (token) => {
    return http.get('users', {
        headers: {
            'Bearer': token
        }
    })
}


export default {
    login,
    register,
    getUserInfo

}