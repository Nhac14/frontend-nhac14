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

    let result = {};

    let temp = [];

    response.data.results.forEach(function(element, index){
        const abl = {
            key: index,
            name: element.name,
            description: element.description,
            category: element.category,
            single: element.singers,
            createAt: element.createdDate,
            modifiedAt: element.modifiedDate
        }

        temp.push(abl);
        
    })

    result.data = response.data.results;
    result.dataDisplay = temp;
    return result;
}

const deleteAlbumById = async (id, userToken) => {
    let token = userToken ? userToken : "";
   // const response = await http.delete("albums")
}

export default {
    getListAlbum,
}