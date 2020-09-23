function getVideos (type) {
    return fetch('http://localhost:3001/api/videos', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            videoType: type
        })
    })
    .then(response => response.json()) // Turn json response back to string
    .then(data => data)
    .catch(err => console.log(err))
}

export default getVideos;