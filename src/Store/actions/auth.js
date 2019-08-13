import * as actionTypes from '../actions/actionsTypes';
import axios from 'axios';
import axiosUser from '../../axios/matches';

export const authStart = (param) =>{
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}


export const authFail = (error) =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}
export const auth =(userDetails, isSignup) =>{
    return dispatch =>{
        let details = {
            email: userDetails.email,
            password: userDetails.password,
            returnSecureToken : true,
        }
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwsGL-_rArSAAjxY3jXZcUH_aoXLyjMYE';

        if(!isSignup)
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwsGL-_rArSAAjxY3jXZcUH_aoXLyjMYE';

        axios.post(url, details)
        .then( response =>{
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('userID',response.data.localId);
            localStorage.setItem('expires',response.data.expiresIn);
            let user = {
                token : response.data.idToken,
                userID: response.data.localId,
                expires : response.data.expiresIn
            }
            localStorage.setItem('user',user);
            if(!isSignup){
                dispatch(authSuccess(user));
                
            }
            else
                dispatch(addUser(response.data.localId,userDetails, user));
                
        }).catch( response => {
            dispatch(authFail(response));
        });
    }
}

export const addUser =(userID, userDetails,user) =>{
    return dispatch =>{
        dispatch(authStart());
        let userData = {
            userID : userID,
            email: userDetails.email,
            dname: userDetails.dName,
            points: userDetails.points
        }
        axiosUser.post('/user.json',userData)
        .then(response => {
            dispatch(authSuccess(user));
        })
        .catch(error => console.log(error));
    }
}

export const logout =() =>{
    return dispatch =>{
        dispatch(authStart());
        let user = '';
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.removeItem('expires');
        localStorage.removeItem('user');
        dispatch(authSuccess(user));
    }
}