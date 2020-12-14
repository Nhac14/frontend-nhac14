import http from './config';

const getAllCategory = async () => {
    return await http.get('categorys');
}

const getByIdAsync = async (categoryID) => {
    return await http.get(`categorys/${categoryID}`);
}


const getListCategory = () => {
    let select = '_id,name';
    return http.get(`categories?page=${1}&limit=${50}&select=${select}`);
}

const createCategory = (name) => {
    return http.post('admin/categories', {name: name});
}
export default {
    getAllCategory,
    getByIdAsync,
}