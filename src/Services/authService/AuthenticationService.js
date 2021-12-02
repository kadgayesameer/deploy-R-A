import axios from "axios";
import {ApiUrl} from '../../Constants/ApiUrl'
import {AuthenticatedKey} from '../../Constants/AuthenticatedKey'
import {TokenKey} from '../../Constants/TokenKey'

class AuthenticationService {
    //First Step
    executeJwtAuthenticationService(username, password, mPin) {
        return axios.post(`${ApiUrl}/token`, {username, password, mPin})
    }

    //Second Step
    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(AuthenticatedKey, username)
        sessionStorage.setItem(TokenKey, token);
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    
    //Forth Step
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    //Fifth Step
    isUserLoggedIn() {
        let user = sessionStorage.getItem(`${AuthenticatedKey}`)
        if(user===null) return false
        return true
    }

    //Other Step To Get Details Of UserName Who Logged In
    getLoggedInUserName() {
        let user = sessionStorage.getItem(`${AuthenticatedKey}`)
        if (user === null) return ''
        return user
    }

    //Third Step
    setupAxiosInterceptors(token) {
        console.log("Internaly Axios Interceptors Used For All Backend Request Before Handle Then and Catch ==>>> ");
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

     //For On Refresh set Interceptors with Token Header
     requestHeaderBinderOnRefresh(){
        //alert("hey requestHeaderBinderOnRefresh binder")
       axios.interceptors.request.use(function (config) {
           // Do something before request is sent
           if (sessionStorage.getItem(`${TokenKey}`)) {
               let token = sessionStorage.getItem(TokenKey);
               config.headers.authorization = 'Bearer ' +token;
               // config.headers.authorization = this.createJWTToken(sessionStorage.getItem(TokenKey));
               //alert("Request Binded ==>> "+ token);
           }
           return config;
         }, function (error) {
           // Do something with request error
           return Promise.reject(error);
         });
   }

    logout() {
        sessionStorage.removeItem(`${AuthenticatedKey}`);
        sessionStorage.removeItem(`${TokenKey}`);
        return true;
    }
}

export default new AuthenticationService()