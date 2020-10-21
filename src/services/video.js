
function getVideos(type, profession){
    const queryParams= '?videoType='+ type + '&profession=' + profession;
    return fetch('http://localhost:3001/api/videos/all' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getVideos;