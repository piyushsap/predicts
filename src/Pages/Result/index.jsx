import React, { Component } from 'react';

import { Button, Input, Select, Pageheader } from "../../Component";
import { connect } from 'react-redux';

import { postResult, postPoints, fetchUserPoints } from '../../Store/actions/index';
import { Redirect } from 'react-router-dom';

class Result extends Component {
  componentWillMount() {
    this.props.onGetPoints();
  };
  render() {

    if (this.props.matchID) { }
    const options = [
      { name: this.props.matchID.team1, alias: this.props.matchID.team1a },
      { name: this.props.matchID.team2, alias: this.props.matchID.team2a },
      { name: 'Match Dismissed', alias: 'matchdismiss' }
    ];

    const getPrediction = (matchId, userID) => {
      if (this.props.predictions != null) {
        let predict = this.props.predictions.filter(prediction => {
          return prediction.matchID === matchId && prediction.userID === userID
        });
        let prediction = predict.length ? predict[0].prediction : null;
        return prediction
      }
    };
    const bonusPoints = (userID, bonusWinner, match) => {
      let points = 0,
        bonusWin = bonusWinner.filter(bonusW => {
          return userID === bonusW
        });
      if (bonusWin[0] === userID)
        points = match.bonusp;
      else
        points = 0

      return points
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let winners = '';
      if (e.currentTarget.bonusWinner) {
        winners = [].slice.call(e.currentTarget.bonusWinner.selectedOptions).filter(option => {
          return option.selected
        }).map(item => item.value)
      }

      let result = {
        winner: e.currentTarget.winner.value,
        result: e.currentTarget.result.value,
      };

      result.bonusWinner = winners;
      let userpoints = {};
      this.props.userPoints.forEach(user => {
        let prediction = getPrediction(this.props.matchID.id, user.id),
            points = user.points,
            bonusPoint = 0;
        if(e.currentTarget.bonusWinner)
          bonusPoint = bonusPoints(user.id, result.bonusWinner, this.props.matchID);

        if (result.winner === 'matchdismiss') {
          points = (Number(points) + Number(bonusPoint)) + 1;
        } else {
          if (prediction === result.winner) {
            points = (Number(points) + Number(bonusPoint)) + 1;
          } else {
            if (prediction === '') {
              points = (Number(points));
            } else {
              points = (Number(points) + Number(bonusPoint)) - 1;
            }
          }
        }
        userpoints[user.id] = {
          points
        };
      });
      this.props.onAddResult(result, this.props.matchID.id);
      this.props.onAddPoints(userpoints)
    };
    return (
      <section>
        {this.props.redirect ? (<Redirect to='/dashboard' />) : null}
        {this.props.matchID ? (
          <div>
            <Pageheader {...{ heading: `Add Result For ${this.props.matchID.team1} VS ${this.props.matchID.team2}` }} />

            <form onSubmit={handleSubmit}>
              <div className="slds-grid slds-gutters">
                <div className="slds-col">
                  <Select {...{
                    name: "winner",
                    placeHolder: "Please Select winner",
                    options: options,
                    id: "winner"
                  }} />
                </div>
              </div>

              <div className="slds-grid slds-gutters">
                <div className="slds-col">
                  <Input {...{ name: "result", placeHolder: "Match Result", id: "result" }} />
                </div>
              </div>
              {this.props.matchID.bonus !== '' ? (
                <div className="slds-grid slds-gutters">
                  <div className="slds-col">
                    <Select {...{
                      name: "bonusWinner",
                      placeHolder: "Choose Bonus winners",
                      options: this.props.users,
                      id: "bonusWinner",
                      multiple: true
                    }} />
                  </div>
                </div>
              ) : null}
              <Button {...{ text: "Add Result" }} />
              <p>{this.props.prediction.prediction},{this.props.prediction.bonus}</p>
            </form>
          </div>
        ) : null}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    predictions: state.predictions,
    prediction: state.prediction,
    userID: state.user.userID,
    redirect: state.redirect,
    matchID: state.matchID[0],
    users: state.users,
    userPoints: state.userpoints
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddResult: (result, matchId) => dispatch(postResult(result, matchId)),
    onAddPoints: (points) => dispatch(postPoints(points)),
    onGetPoints: () => dispatch(fetchUserPoints())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);