
function getTrends(query){
    const queryParams= '?searchQuery=' + query;
    return fetch('http://localhost:3001/api/videos/trending' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getTrends;