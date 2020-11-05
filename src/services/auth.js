import { Subject } from "rxjs";
import axiosInstance from '../helper/httpInterceptor';
const BACKEND_URL = "http://localhost:3001/api/users";
var isAuthenticated = false;
var token = '';
var tokenTimer = '';
var userId = '';
var authStatusListener = new Subject();

export const AuthService = {
    getToken,
    test,
    getIsAuth,
    getUserId,
    createUser,
    login,
    autoAuthUser,
    logout,
    getUser,
    setAuthTimer,
    saveAuthData,
    clearAuthData,
    getAuthData,
    isAuthenticated: authStatusListener.asObservable(),
    get isUserAuthenticated () { return authStatusListener.value; }
}
function getToken() {
    return token;
}
function test() {
    console.log(token);
}
function getIsAuth() {
    return isAuthenticated;
}

function getUserId() {
    return userId;
}
function getUser(){
    return axiosInstance.get(BACKEND_URL + "/"+ userId)
}

function createUser(firstName, lastName, email, password) {
    return axiosInstance.post(BACKEND_URL + "/signup",
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        },
        {
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(() => { 
        })
        .catch(error => {
            authStatusListener.next(false);
        });
}

 function login(email, password) {
    return axiosInstance.post(BACKEND_URL + "/login",
        { email: email, password: password },
        {
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            token = response.data.token;
            if (token) {
                const expiresInDuration = response.data.expiresIn;
                setAuthTimer(expiresInDuration);
                isAuthenticated = true;
                userId = response.data.userId;
                authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                saveAuthData(token, expirationDate, userId);
            }
        }, error => {
            authStatusListener.next(false);
        });
        
}

function autoAuthUser() {
    const authInformation = getAuthData();
    if (!authInformation) {
        return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
        token = authInformation.token;
        isAuthenticated = true;
        userId = authInformation.userId;
        setAuthTimer(expiresIn / 1000);
        authStatusListener.next(true);
    }
}

function logout() {
    token = null;
    isAuthenticated = false;
    authStatusListener.next(false);
    userId = null;
    clearTimeout(tokenTimer);
    clearAuthData();
}

//private 
function setAuthTimer(duration) {
    console.log("Setting timer: " + duration);
    tokenTimer = setTimeout(() => {
        this.logout();
    }, duration * 1000);
}

//private 
function saveAuthData(token, expirationDate, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);

}

//private 
function clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
}

//private 
function getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");

    if (!token || !expirationDate) {
        return;
    }
    return {
        token: token,
        expirationDate: new Date(expirationDate),
        userId: userId
    }
}

