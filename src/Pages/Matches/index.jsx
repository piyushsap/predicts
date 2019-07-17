import React, { Component } from 'react';

import { Button, Input } from "../../Component";
import { connect } from 'react-redux';

import * as actionTypes from '../../Store/actions';

import axios from '../../axios/matches';

class Matches extends Component {
  state = {
    isLoading: false,
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      let match = {
          team1 : e.currentTarget.team1.value,
          team2 : e.currentTarget.team2.value,
          date : e.currentTarget.date.value,
          time : e.currentTarget.time.value,
          stadium : e.currentTarget.stadium.value,
        };
        
        axios.post('/matches.json',match)
        .then(response => {
            console.log(response);
            this.props.onAddMatch(match);
        })
        .catch(error => console.log(error));
    };
    return (
      <section>
        <h1>Add Matches</h1>
        <form onSubmit={handleSubmit}>
          <Input {...{ name: "team1", placeHolder: "Team 1", id: "team1" }} />
          <Input {...{ name: "team2", placeHolder: "Team 2", id: "team2" }} />
          <Input {...{ name: "date", placeHolder: "Date", id: "date" }} />
          <Input {...{ name: "time", placeHolder: "Time", id: "time" }} />
          <Input {...{ name: "stadium", placeHolder: "Stadium", id: "stadium" }} />
          <Button {...{ text: "Add Match" }} />
        </form>
        <p>{this.props.matches.team1},{this.props.matches.team2},{this.props.matches.time},{this.props.matches.date}{this.props.matches.stadium}</p>
      </section>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
  return {
    matches: state.match,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddMatch: (match) => dispatch({type: actionTypes.ADD_MATCH, value: match})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);