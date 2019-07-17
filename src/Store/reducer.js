import * as actionTypes from './actions';

const initialstate={
    prediction: {
        userID : '',
        matchID : '', 
        predictions: '',
        bonus: '',
    },
    match:{
        team1 : '',
        team2 : '',
        date : '',
        time : '',
        stadium : '',
    },
    schedule: []
}

const reducer = (state = initialstate,action) =>{
    console.log(action);
    switch(action.type){
        case actionTypes.ADD_PREDICTION:
            return {
                ...state,
                prediction: action.value,
            };
        case actionTypes.ADD_MATCH:
            return {
                ...state,
                match : action.value
            };
        case actionTypes.GET_SCHEDULE:
            return {
                ...state,
                schedule : action.value
            };
        default:
            return state;
    }
};

export default reducer;