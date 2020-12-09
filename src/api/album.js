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
    const response = await http.get(url);

    let result = [];

    response.data.data.forEach(function(element, index){
        const abl = {
            key: index,
            name: element.name,
            description: element.description,
            category: element.category,
            single: element.singers,
            createAt: element.createdDate,
            modifiedAt: element.modifiedDate
        }

        result.push(abl);
        
    })

    debugger
    return result;
}

export default {
    getListAlbum,
}