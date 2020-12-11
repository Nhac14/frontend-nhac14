import http from './config';


const getListCategory = () => {
    return http.get('categories');
}

export default {
    getListCategory
    
}