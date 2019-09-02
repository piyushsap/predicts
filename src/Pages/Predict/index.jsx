import React, { Component } from 'react';

import { Button, Input, Select, Pageheader } from "../../Component";
import { connect } from 'react-redux';

import { postPrediction, fetchPrediction, getMatch } from '../../Store/actions/index';
import {Redirect} from 'react-router-dom';

class Predict extends Component {
  componentWillMount(){
      console.log(this.props.match.params.id)
      this.props.onFetchPredictions();
      this.props.onGetMatch(this.props.match.params.id);
  };
  render() {
    console.log(this.props.match,22)
    if(this.props.redirect) 
      return <Redirect to='/dashboard' />
    
      const getPrediction = (matchId,userID) => {
      if(this.props.predictions!=null){
        let predict = this.props.predictions.filter(prediction =>{
          return prediction.matchID === matchId && prediction.userID === userID
        });
        let prediction = predict.length ? predict[0].id : null;
        return prediction
      }
    };
    if(this.props.matchID){}
    const options = [
      {name:this.props.matchID.team1,alias:this.props.matchID.team1a},
      {name:this.props.matchID.team2,alias:this.props.matchID.team2a}
    ]
    const handleSubmit = (e) => {
      e.preventDefault();
      let checkprediction = getPrediction(this.props.matchID.id,this.props.userID)
      let prediction = {
          userID : this.props.userID,
          matchID : this.props.matchID.id, 
          prediction: e.currentTarget.prediction.value,
          bonus: e.currentTarget.bonus ? e.currentTarget.bonus.value : '',
        },
        predicted =  checkprediction ? checkprediction : '';
        this.props.onAddPrediction(prediction,predicted);
    };
    return (
      <section>
        { this.props.redirect ?( <Redirect to='/dashboard' /> ) : null }
        { this.props.matchID ? (
          <div>
            <Pageheader {...{ heading: `${this.props.matchID.team1} VS ${this.props.matchID.team2}` }} />
            <form onSubmit={handleSubmit}>
              <Select {...{ name: "prediction", 
              placeHolder: "Please Select",
              options: options, 
              id: "prediction" }} />

              {this.props.matchID.bonus !=='' ? (
              <Input {...{ name: "bonus", placeHolder: "bonus", id: "bonus" }} />
              ):null}
              <Button {...{ text: "Predict" }} />
            </form>
          </div>
        ): null}
      </section>
    );
  }
}

function mapStateToProps(state) { 
  console.log(state.matchID);
  return {
    predictions: state.predictions,
    prediction: state.prediction,
    userID: state.user.userID,
    redirect: state.redirect,
    matchID: state.matchID,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddPrediction: (prediction,predicted) => dispatch(postPrediction(prediction,predicted)),
    onFetchPredictions: () => dispatch(fetchPrediction()),
    onGetMatch:(match) => dispatch(getMatch(match))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Predict);