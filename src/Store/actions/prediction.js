import * as actionType from './actionsTypes';
import axios from '../../axios/matches';

export const addPrediction = (prediction) => {
    return{
        type: actionType.ADD_PREDICTION,
        prediction : prediction
    };
}
export const getmatchDetail = (match) => {
    return{
        type: actionType.GET_MATCH_DETAIL,
        match : match
    };
}


export const getMatch = (id) =>{
    return dispatch =>{
        axios.get('/matches/'+id+'.json')
        .then(response => {
            let match = response.data
            match.id = id;
            console.log(match)
            dispatch(getmatchDetail(match));
        })
        .catch(error => {
            console.log(error)
        });
    }
}

export const postPrediction = (prediction,predicted) =>{
    return dispatch =>{
        if(predicted){
            axios.put('/predictions/'+predicted+'.json',prediction)
            .then(response => {
                dispatch(addPrediction(response.data));
            })
            .catch(error => {
              console.log(error);
            });

        }else{
            axios.post('/predictions.json',prediction)
            .then(response => {
                dispatch(addPrediction(response.data));
            })
            .catch(error => {
              console.log(error);
            });
        }
    }
}