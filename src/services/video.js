
function getVideos(type, profession){
    const queryParams= '?videoType='+ type + '&profession=' + profession;
    const apiURL=process.env.apiURL + '/videos';
    return fetch( apiURL + '/all' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getVideos;