import * as actionType from './actionsTypes';
import axios from '../../axios/matches';

export const addMatches = (match) => {
    return{
        type: actionType.ADD_MATCH,
        match : match
    };
}

export const postMatch = (match) =>{
    return dispatch =>{
        axios.post('/matches.json',match)
        .then(response => {
            dispatch(addMatches(response.data));
        })
        .catch(error => console.log(error));
    }
}