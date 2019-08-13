import * as actionType from './actionsTypes';
import axios from '../../axios/matches';

export const getUsers = (users) => {
    return{
        type: actionType.GET_USERS,
        users : users
    };
}

export const fetchUsers = () =>{
    return dispatch =>{
        axios.get('/user.json')
        .then(response => {
            const users = [];
            for ( let key in response.data ) {
                users.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(getUsers(users));
        })
        .catch(error => {
            console.log(error)
        });
    }
}

export const getPrediction = (predictions) => {
    return{
        type: actionType.GET_PREDICTIONS,
        predictions : predictions
    };
}

export const fetchPrediction = () =>{
    return dispatch =>{
        axios.get('/predictions.json')
        .then(response => {
            const predictions = [];
            for ( let key in response.data ) {
                predictions.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(getPrediction(predictions));
        })
        .catch(error => {
            console.log(error)
        });
    }
}