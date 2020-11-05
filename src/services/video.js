import axiosInstance from '../helper/httpInterceptor';
function getVideos(type, profession) {
    const queryParams = '?videoType=' + type + '&profession=' + profession;
    return axiosInstance.get('http://localhost:3001/api/videos/all' + queryParams, {
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then()
        .catch(err => console.log(err))
}

export default getVideos;