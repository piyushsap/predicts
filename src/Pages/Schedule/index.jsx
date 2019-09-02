import React, { Component } from 'react';
import Schedulecard from './Schedulecard';
import { connect } from 'react-redux';
import { getMatchID, fetchSchedule, onlock } from '../../Store/actions/index';
import { Spinner, Pageheader } from "../../Component";
import { Redirect } from 'react-router-dom';
class Schedule extends Component {
    componentWillMount() {
        this.props.onFetchSchedule();
    };
    render() {
        const predict = (e) => {
            e.preventDefault();
            let matchdata = this.props.schedule.filter(match => {
                return match.id === e.target.id;
            })
            this.props.onPredictInit(matchdata);
        }
        const lock = (e) => {
            e.preventDefault();
            let matchdata = this.props.schedule.filter(match => {
                return match.id === e.target.id;
            })
            matchdata[0].locked = true
            this.props.onlock(matchdata[0]);
        }
        return (
            <section>
                {this.props.matchID && !this.props.result ? (<Redirect to='/predict' />) : null}
                {this.props.matchID && this.props.matchID[0].locked ? (<Redirect to='/result' />) : null}
                <Pageheader {...{ heading: "Match Schedule" }} />
                <div className="matches">
                    {!this.props.loading ? (
                        this.props.schedule.map((match, index) => {
                            return <Schedulecard match={match} lock={lock} predict={predict} key={index} matchno={index + 1} />
                        })
                    ) : (
                            <Spinner />
                        )}
                </div>
            </section>
        );
    }
}


function mapStateToProps(state) {
    return {
        schedule: state.schedule,
        loading: state.loading,
        matchID: state.matchID,
        result: state.result
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onFetchSchedule: () => dispatch(fetchSchedule()),
        onPredictInit: (id) => dispatch(getMatchID(id)),
        onlock: (match) => dispatch(onlock(match))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);