import http from './config';

const getAlbumList = (page, limit) => {
    let select="cover_image,name,_id";
    return http.get(`albums/pagination?page=${page}&limit=${limit}&select=${select}`);
}

const getAlbumById = (albumId) => {
    return http.get(`albums/${albumId}`);
}

export default {
    getAlbumList,
    getAlbumById

}