
function getTrends(query, num){
    const queryParams= '?searchQuery=' + query + '&maxResults=' + num;
    return fetch('http://localhost:3001/api/videos/trending' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getTrends;