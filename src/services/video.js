function getVideos (type) {
    fetch('http://localhost:3001/api/videos', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            videoType: type
        })
    })
    .then(response => response.json()) // Turn json response back to string
    .then(console.log)
    .catch(err => console.log(err))
}

export default getVideos;