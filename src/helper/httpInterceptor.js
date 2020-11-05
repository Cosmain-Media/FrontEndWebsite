import { AuthService } from '../services/auth';
import axios from 'axios';
var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent 
    //If the header does not contain the token and the url not public, redirect to login  
    var accessToken =  AuthService.getToken();

    //if token is found add it to the header
    if (accessToken) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = "Bearer " +accessToken;
        }
    }
    return config;
}, function (error) {
    // Do something with request error 
    return error;
});
export default axiosInstance;