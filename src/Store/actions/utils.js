import * as actionTypes from '../actions/actionsTypes';

export const closeAlerts = () =>{
    return {
        type: actionTypes.CLOSE_ALERTS,
        closeAlerts: false
    }
}