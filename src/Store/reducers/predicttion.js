import * as actionTypes from '../actions';

const initialstate={
    predictions: '',
    bonus: '',
}

const predictionReducer = (state = initialstate,action) =>{
    console.log()
    switch(action.type){
        case actionTypes.ADD_PREDICTION:
            return {
                ...state,
                predictions: action.value.prediction,
                bonus: action.value.bonus,
            };
        default:
            return state;
    }
};

export default predictionReducer;