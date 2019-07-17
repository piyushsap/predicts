import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Dashboard,Schedule,Predict,Login,Matches} from '../Pages/';
import { Route } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
          <Route exact path="/" component = {Login} />
          <Route exact path="/dashboard" component = {Dashboard} />
          <Route path="/schedule" component = {Schedule} />
          <Route path="/predict" component = {Predict} />
          <Route path="/match" component = {Matches} />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
