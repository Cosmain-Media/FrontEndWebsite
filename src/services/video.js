export default {
    getVideos,
    searchTags,
}

function getVideos(type, category){
    const queryParams= '?videoType='+ type + '&category=' + category;
    // https://cosmain-api.herokuapp.com/api
    // http://localhost:3001/api
    const apiURL='http://localhost:3001/api' + '/videos';
    return fetch( apiURL + '/all' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

function searchTags(tag){
    const queryParams= '?tags=' + tag;
    // http://localhost:3001/api
    // https://cosmain-api.herokuapp.com/api
    const apiURL='http://localhost:3001/api' + '/videos';
    return fetch( apiURL + '/search' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}