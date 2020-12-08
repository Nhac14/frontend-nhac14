import http from './config';

const getListAlbum = async (filter) => {
    let url = 'albums';
    if(!filter.page)
        url = url.concat('?page='+filter.page);
    else
        url = url.concat('?page=0');
    if(!filter.sort)
        url = url.concat('&&sort='+filter.sort);
    if(!filter.limit)
        url = url.concat('&&limit='+filter.limit);
    const result = http.get(url);
    console.log(url);
    debugger
    return await result;
}

export default {
    getListAlbum,
}