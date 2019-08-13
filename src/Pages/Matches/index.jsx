import React, { Component } from 'react';

import { Button, Input, Pageheader } from "../../Component";
import { connect } from 'react-redux';

import { postMatch } from '../../Store/actions/index';

class Matches extends Component {
  state = {
    isLoading: false,
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      let match = {
        team1: e.currentTarget.team1.value,
        team2: e.currentTarget.team2.value,
        team1a: e.currentTarget.team1a.value,
        team2a: e.currentTarget.team2a.value,
        bonus: e.currentTarget.bonus.value,
        bonusa: e.currentTarget.bonusa.value,
        bonusp: e.currentTarget.bonusp.value,
        date: e.currentTarget.date.value,
        time: e.currentTarget.time.value,
        stadium: e.currentTarget.stadium.value,
        locked: false
      };

      this.props.onAddMatch(match);
    };

    return (
      <section>
        <Pageheader {...{ heading: "Add match" }} />
        <form onSubmit={handleSubmit}>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "team1", placeHolder: "Team 1", id: "team1" }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "team1a", placeHolder: "Team 1 Alias", id: "team1a" }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "team2", placeHolder: "Team 2", id: "team2" }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "team2a", placeHolder: "Team 2 Alias", id: "team2a" }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "bonus", placeHolder: "Bonus", id: "bonus" }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "bonusa", placeHolder: "Bonus Alias", id: "bonusa" }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "bonusp", placeHolder: "Bonus Points", id: "bonusp" }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "date", placeHolder: "Date", id: "date" }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "time", placeHolder: "Time", id: "time" }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "stadium", placeHolder: "Stadium", id: "stadium" }} />
            </div>
          </div>
          <Button {...{ text: "Add Match" }} />
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    matches: state.match,
    loading: state.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddMatch: (match) => dispatch(postMatch(match))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);