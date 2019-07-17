import React, { Component } from 'react';
import Schedulecard from './Schedulecard';
import { connect } from 'react-redux';
import axios from '../../axios/matches';
import * as actionTypes from '../../Store/actions';
import { Spinner } from "../../Component";

class Schedule extends Component {

    state = {
        isLoading: true,
    };
    componentWillMount(){
        axios.get('/matches.json')
        .then(response => {
            console.log(response);
            this.props.onGetSchedule(response.data);
            this.setState({isLoading:false})
        })
        .catch(error => {
            console.log(error)
            this.setState({isLoading:false})
        });
    }
    render() {
        return (
            <section>
                <h1>Match Schedule</h1>
                {!this.state.isLoading ?(
                    this.props.schedule.map((match,index) => {
                        console.log(match)
                        return <Schedulecard match={match} key={index} />
                    })
                ):(
                    <Spinner /> 
                )}
            </section>
        );
    }
}


function mapStateToProps(state) {
    console.log(state.schedule)
  return {
    schedule: state.schedule,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onGetSchedule: (schedule) => dispatch({type: actionTypes.GET_SCHEDULE, value: schedule})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);