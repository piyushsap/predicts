import React, { Component } from 'react';

import { Button, Input, Pageheader, Alert } from "../../Component";
import { connect } from 'react-redux';

import { postMatch, closeAlerts } from '../../Store/actions/index';
import DateTimePicker from 'react-datetime-picker';

class Matches extends Component {
  state = {
    isLoading: false,
    date: new Date()
  };
  componentWillUnmount(){
    this.props.onCloseAlert()
  };
  render() {
    const dateChanged =(d)=>{
      this.setState({date: d});
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      let dateTime = this.state.date;
      let match = {
        team1: e.currentTarget.team1.value,
        team2: e.currentTarget.team2.value,
        team1a: e.currentTarget.team1a.value,
        team2a: e.currentTarget.team2a.value,
        bonus: e.currentTarget.bonus.value,
        bonusa: e.currentTarget.bonusa.value,
        bonusp: e.currentTarget.bonusp.value,
        date: dateTime.toDateString(),
        time: dateTime.toLocaleTimeString().replace(/(.*)\D\d+/, '$1'),
        stadium: e.currentTarget.stadium.value,
        locked: false
      };

      this.props.onAddMatch(match);
    };
    if(this.props.showNotification){ 
      document.getElementById("create-match").reset();
    }
    

    return (
      <section>
        {this.props.showNotification ? (
          <Alert {...{ text: "Logged in successfully", class: "slds-theme_success" }} />
        ):null}
        <Pageheader {...{ heading: "Add match" }} />
        <form onSubmit={handleSubmit} id="create-match">
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
              <DateTimePicker
                onChange={dateChanged} 
                value={this.state.date}
                format ="dd MMM y h:mm a"
                className = "datepicker"
              />
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
    loading: state.loading,
    redirect: state.redirect,
    showNotification:state.showNotification
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddMatch: (match) => dispatch(postMatch(match)),
    onCloseAlert: () => dispatch(closeAlerts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);