import React, { Component } from 'react';

import { Button, Input } from "../../Component";
import { connect } from 'react-redux';
import { auth } from '../../Store/actions/index';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  state = {
    isLoading: false,
  };
  render() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let details = {
      email : form.email.value,
      password : form.password.value,
    },
    isSignup = false;

    this.props.onLogin(details, isSignup);
  };
    return (
      <section>
        { this.props.user.userID && ( <Redirect to='/dashboard' /> ) }
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <Input {...{name:"email", placeHolder:"Email", id:"email"}} />
            <Input {...{name:"password",type:"password", placeHolder:"Password", id:"password"}} />
            <Button {...{text:"Login"}} />
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
    onLogin: (userdetails, method) => dispatch(auth(userdetails,method))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);