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
    userpoints:[],
    matchID:'',
    loading:true,
    schedule: null,
    users: null,
    predictions: null,
    redirect:true,
    result:false,
    showNotification:false
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
                redirect: true,
                showNotification:true
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
                showNotification: true
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
                redirect:false,
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
                redirect:true,
                matchID: ''
            };
        case actionTypes.CLOSE_ALERTS:
            return {
                ...state,
                showNotification : action.closeAlerts,
            };
        case actionTypes.GET_USERPOINTS:
            return {
                ...state,
                userpoints : action.userpoints,
            };
        case actionTypes.GET_MATCH_DETAIL:
            return {
                ...state,
                matchID: action.match,
                redirect:false
            };
        default:
            return state;
    }
};

export default reducer;