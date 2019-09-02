import React, { Component } from 'react';

import { Button, Input } from "../../Component";
import { connect } from 'react-redux';
import { auth } from '../../Store/actions/index';
import { Redirect } from 'react-router-dom';
import { Validate, validateForm } from '../../Services';

class Register extends Component {
  state = {
    isLoading: false,
    email: null,
    password: null,
    dname: null,
    cpassword: null,
    errors: {
      email: '',
      password: '',
      dname:'',
      cpassword:'',
    },
    formvalid: true
  };
  render() {
    const handleChange = (event) => {
      event.preventDefault();
      let name = event.target.name,
        value = event.target.value,
        errors = this.state.errors;

        if(name === 'cpassword'){
          if(value === this.state.password){
            errors.cpassword = '';
          }else{
            errors.cpassword = "Passwords are not matched";
          }
        }else{
          errors = Validate(event.target,errors);
        }


      this.setState({ errors, [name]: value })
      if(this.state.email && this.state.password && this.state.dname && this.state.cpassword)
        this.setState({ formvalid: validateForm(errors) })
    }
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
              <Input {...{ name: "email", type:"email", placeHolder: "Email", id: "email", handleChange: handleChange, handleBlur: handleChange, errors: this.state.errors.email,required:true }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "dname", placeHolder: "Display name", id: "dname", handleChange: handleChange, handleBlur: handleChange, errors: this.state.errors.dname,required:true }} />
            </div>
          </div>
          <div className="slds-grid slds-gutters">
            <div className="slds-col">
              <Input {...{ name: "password", type: "password", placeHolder: "Password", id: "password", handleChange: handleChange, handleBlur: handleChange, errors: this.state.errors.password,required:true }} />
            </div>
            <div className="slds-col">
              <Input {...{ name: "cpassword", type: "password", placeHolder: "Confirm Password", id: "cpassword", handleChange: handleChange, handleBlur: handleChange, errors: this.state.errors.cpassword,required:true }} />
            </div>
          </div>
          <Button {...{ text: "Register", disable:this.state.formvalid }} />
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