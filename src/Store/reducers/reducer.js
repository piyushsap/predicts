import * as actionTypes from '../actions/actionsTypes';

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
    signuperror: '',
    signupsuccess: '',
    user: {
        token : localStorage.getItem('token'),
        userID: localStorage.getItem('userID'),
        expires : localStorage.getItem('expires'),
    },
    matchID:'',
    loading:true,
    schedule: null,
    users: null,
    predictions: null,
    redirect:true,
    result:false
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
        case actionTypes.ADD_MATCH:
            return {
                ...state,
                match : action.match,
                loading: false,
            };
        case actionTypes.GET_SCHEDULE:
            return {
                ...state,
                schedule : action.schedule,
                redirect:false
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                user : action.authData,
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                signuperror : action.error,
            };
        case actionTypes.GET_USERS:
            return {
                ...state,
                users : action.users,
            };
        case actionTypes.GET_PREDICTIONS:
            return {
                ...state,
                predictions : action.predictions,
                loading: false
            };
        case actionTypes.ADD_RESULT:
            return {
                ...state,
                result : action.result,
                redirect:true
            };
        case actionTypes.ADD_POINTS:
            return {
                ...state,
                result : action.result,
                redirect:true
            };
        default:
            return state;
    }
};

export default reducer;