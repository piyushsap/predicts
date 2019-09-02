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
    return dispatch =>{
        axios.put('/userpoints.json/',userPoints)
        .then(response => {
            dispatch(addPoints(response.data));
        })
        .catch(error => console.log(error));
    }
}
export const getUserPoints = (userpoints) => {
    return{
        type: actionType.GET_USERPOINTS,
        userpoints: userpoints
    };
}
export const fetchUserPoints = () =>{
    return dispatch =>{
        axios.get('/userpoints.json')
        .then(response => {
            const upoints = [];
            for ( let key in response.data ) {
                upoints.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(getUserPoints(upoints));
        })
        .catch(error => {
            console.log(error)
        });
    }
}