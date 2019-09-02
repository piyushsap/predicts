import * as actionType from './actionsTypes';
import axios from '../../axios/matches';

export const getSchedule = (schedule) => {
    return{
        type: actionType.GET_SCHEDULE,
        schedule: schedule
    };
}

export const fetchSchedule = () =>{
    return dispatch =>{
        axios.get('/matches.json')
        .then(response => {
            const schedule = [];
            for ( let key in response.data ) {
                schedule.push( {
                    ...response.data[key],
                    id: key
                } );
            }
            dispatch(getSchedule(schedule));
        })
        .catch(error => {
            console.log(error)
        });
    }
}

export const getMatchID = (matchID) => {
    return{
        type: actionType.GET_PREDICTION_ID,
        matchID: matchID
    };
}

export const onlock = (match) =>{
    return dispatch =>{
        axios.put('/matches/'+match.id+'.json',match)
        .then(response => {
            dispatch(fetchSchedule());
        })
        .catch(error => {
            console.log(error)
        });
    }
}
