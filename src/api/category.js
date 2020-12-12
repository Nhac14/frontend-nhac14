import http from './config';

const getAllCategory = async () => {
    return await http.get('categorys');
}

const getByIdAsync = async (categoryID) => {
    return await http.get(`categorys/${categoryID}`);
}

export default {
    getAllCategory,
    getByIdAsync
}