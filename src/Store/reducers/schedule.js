import * as actionTypes from '../actions';

const initialstate={
    predictions: '',
    bonus: '',
}

const scheduleReducer = (state = initialstate,action) =>{
    switch(action.type){
        case actionTypes.SCHEDULE:
            return {
                ...state,
                predictions: action.value.prediction,
                bonus: action.value.bonus,
            };
        default:
            return state;
    }
};

export default scheduleReducer;