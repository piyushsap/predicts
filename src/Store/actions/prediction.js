import * as actionType from './actionsTypes';
import axios from '../../axios/matches';

export const addPrediction = (prediction) => {
    return{
        type: actionType.ADD_PREDICTION,
        prediction : prediction
    };
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