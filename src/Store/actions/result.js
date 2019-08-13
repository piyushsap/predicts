import * as actionType from './actionsTypes';
import axios from '../../axios/matches';

export const addResult = (result) => {
    return{
        type: actionType.ADD_RESULT,
        result : result
    };
}

export const postResult = (result,matchId) =>{
    return dispatch =>{
        axios.patch('/matches/'+matchId+'.json',result)
        .then(response => {
            dispatch(addResult(response.data));
        })
        .catch(error => console.log(error));
    }
}

export const addPoints = (result) => {
    return{
        type: actionType.ADD_POINTS,
        result : result
    };
}
export const postPoints = (userPoints) =>{
    console.log(userPoints);
    return dispatch =>{
        axios.put('/user.json/',userPoints)
        .then(response => {
            console.log(response.data)
            dispatch(addPoints(response.data));
        })
        .catch(error => console.log(error));
    }
}