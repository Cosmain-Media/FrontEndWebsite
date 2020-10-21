function getVideos(type, profession){
    console.log(process.env.LOCAL)
    const queryParams= '?videoType='+ type + '&profession=' + profession;
    const apiURL='https://cosmain-api.herokuapp.com/api' + '/videos';
    return fetch( apiURL + '/all' + queryParams , {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

export default getVideos;