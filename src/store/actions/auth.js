import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return{
        type:actionTypes.AUTH_START,
    }
}

export const authSuccess = (token,userId) => {
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId,
    }
}

export const authFail = (error) => {
    let errorMessage=null;
    switch(error){
        case('EMAIL_EXISTS'):
        errorMessage = 'Email already exist!';
        break;
        case('INVALID_EMAIL'):
        errorMessage = 'Please enter a valid email address';
        break;
        case('INVALID_PASSWORD'):
        errorMessage = 'Incorrect Password. Please try again!';
        break;
        case('EMAIL_NOT_FOUND'):
        errorMessage = 'Your email is not registered. Please sign up!';
        break;
        case('USER_DISABLED'):
        errorMessage = 'Your account has been disabled by an administrator';
        break;
        default:
        errorMessage=null;
    }
    return{
        type:actionTypes.AUTH_FAIL,
        error:errorMessage,
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)
    }
}

export const auth = (email,password,isSignUp) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email:email,
            password:password,
            returnSecureToken:true,
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDja0Zeb4Z30GkxxdJYE1x_FJzJwCwA9sw';

        if(!isSignUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDja0Zeb4Z30GkxxdJYE1x_FJzJwCwA9sw';
        };

        axios.post(url,authData)
        .then(response => {
            // console.log(response);
            const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn*1000))
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('userId',response.data.localId);
            dispatch(authSuccess(response.data.idToken,response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        
        .catch(err => {
            // console.log(err);
            dispatch(authFail(err.response.data.error.message));
        })
    }
}

export const setAuthRedirectPath = (path) => {
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path,
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());
            }else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout(
                    (expirationDate.getTime()-new Date().getTime())/1000));
            }
        }
    }
}