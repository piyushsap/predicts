import React, { Component } from 'react';

import { Button, Input, Spinner } from "../../Component";
import { connect } from 'react-redux';

import * as actionTypes from '../../Store/actions';

import axios from '../../axios/matches';

class Predict extends Component {
  state = {
    isLoading: false,
  };
  render() {

    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({isLoading:true});
      let prediction = {
          userID : '1111',
          matchID : '3232', 
          prediction: e.currentTarget.prediction.value,
          bonus: e.currentTarget.bonus.value,
        };
        
        axios.post('/predictions.json',prediction)
        .then(response => {
            this.setState({isLoading:false})
            this.props.onAddPrediction(prediction);
        })
        .catch(error => {
          console.log(error);
          this.setState({isLoading:false})
        });
    };
    return (
      <section>
        <h1>MATCH 1 : ENGLAND VS SOUTH AFRICA</h1>
        <form onSubmit={handleSubmit}>
          { this.state.isLoading &&
            <Spinner />
          }
          <Input {...{ name: "prediction", placeHolder: "prediction", id: "prediction" }} />
          <Input {...{ name: "bonus", placeHolder: "bonus", id: "bonus" }} />
          <Button {...{ text: "Predict" }} />
          <p>{this.props.prediction.predictions},{this.props.prediction.bonus}</p>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {  
  console.log(state);
  return {
    prediction: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAddPrediction: (prediction) => dispatch({type: actionTypes.ADD_PREDICTION, value: prediction})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Predict);