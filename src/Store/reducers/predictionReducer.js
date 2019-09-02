import * as actionTypes from '../actions/actionsTypes';

const initialstate={
    prediction: {
        userID : '',
        matchID : '', 
        predictions: '',
        bonus: '',
    },
    matchID:'',
    redirect:true,
}

const reducer = (state = initialstate,action) =>{
    switch(action.type){
        case actionTypes.ADD_PREDICTION:
            return {
                ...state,
                prediction: action.prediction,
                matchID:'',
                redirect:true
            };
        case actionTypes.GET_PREDICTION_ID:
            return {
                ...state,
                matchID: action.matchID,
                redirect:false
            };
        default:
            return state;
    }
};

export default reducer;