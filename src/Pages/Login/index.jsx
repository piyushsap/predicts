import React, { Component } from 'react';

import { Button, Input } from "../../Component";
import { connect } from 'react-redux';
import { auth } from '../../Store/actions/index';
import { Redirect } from 'react-router-dom';
import { Validate, validateForm } from '../../Services';

class Login extends Component {
  state = {
    isLoading: false,
    email: null,
    password: null,
    errors: {
      email: '',
      password: '',
    },
    formvalid: true
  };
  render() {
    const handleChange = (event) => {
      event.preventDefault();
      let name = event.target.name,
        value = event.target.value,
        errors = this.state.errors;

        errors = Validate(event.target,errors);


      this.setState({ errors, [name]: value })
      if(this.state.email && this.state.password)
        this.setState({ formvalid: validateForm(errors) })
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      let details = {
        email: form.email.value,
        password: form.password.value,
      },
        isSignup = false;

      this.props.onLogin(details, isSignup);
    };
    return (
      <section>
        {this.props.user.userID && (<Redirect to='/dashboard' />)}
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input {...{ name: "email", placeHolder: "Email", id: "email", handleBlur: handleChange, handleChange: handleChange, errors: this.state.errors.email,required:true }} />
          <Input {...{ name: "password", type: "password", placeHolder: "Password", id: "password", handleBlur: handleChange, handleChange: handleChange, errors: this.state.errors.password,required:true }} />
          <Button {...{ text: "Login", disable:this.state.formvalid }} />
          {this.state.formvalid}
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
    onLogin: (userdetails, method) => dispatch(auth(userdetails, method))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);