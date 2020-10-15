
function getVideos(type, query){
    const queryParams= '?videoType='+ type + '&searchQuery=' + query;
    return fetch('http://localhost:3001/api/videos/all' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getTrends;