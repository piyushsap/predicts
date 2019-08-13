import React, { Component } from 'react';

import { Button, Input, Alert } from "../../Component";
import { connect } from 'react-redux';
import { auth } from '../../Store/actions/index';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
    isLoading: false,
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      let details = {
        email: form.email.value,
        password: form.password.value,
        dName: form.dname.value,
        points: 0
      },
        isSignup = true;

      this.props.onRegister(details, isSignup);
    };
    return (
      <section>
        {this.props.user.userID ? (<Redirect to='/' />) : null}
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "email", type:"email", placeHolder: "Email", id: "email" }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "dname", placeHolder: "Display name", id: "dname" }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "password", type: "password", placeHolder: "Password", id: "password" }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "cpassword", type: "password", placeHolder: "Confirm Password", id: "cpassword" }} />
            </div>
          </div>
          <Button {...{ text: "Register" }} />
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRegister: (userDetails, isSignup) => dispatch(auth(userDetails, isSignup))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);