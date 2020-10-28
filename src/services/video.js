export default {
    getVideos,
    searchVideos,
}

function getVideos(type, category){
    const queryParams= '?videoType='+ type + '&category=' + category;
    // https://cosmain-api.herokuapp.com/api
    // http://localhost:3001/api/videos
    const apiURL='https://cosmain-api.herokuapp.com/api' + '/videos';
    return fetch( apiURL + '/all' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

function searchVideos(type, profession){
    const queryParams= '?videoType='+ type + '&profession=' + profession;
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