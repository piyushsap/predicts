import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Dashboard,Schedule,Predict,Login,Matches, Register, Result} from '../Pages/';
import { Route } from 'react-router-dom';
import { PrivateRoute } from '../Hoc';

function Main() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
          <Route exact path="/" component = {Login} />
          <PrivateRoute path="/dashboard" component = {Dashboard} />
          <PrivateRoute path="/schedule" component = {Schedule} />
          <PrivateRoute path="/predict/:id" component = {Predict} />
          <PrivateRoute path="/result" component = {Result} />
          <PrivateRoute path="/match" component = {Matches} />
          <Route path="/register" component = {Register} />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
