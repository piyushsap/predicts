import * as actionTypes from '../actions';

const initialstate={
    predictions: '',
    bonus: '',
}

const matchReducer = (state = initialstate,action) =>{
    switch(action.type){
        case actionTypes.ADD_MATCH:
            return {
                ...state,
                predictions: action.value.prediction,
                bonus: action.value.bonus,
            };
        default:
            return state;
    }
};

export default matchReducer;