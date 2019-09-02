import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Store/actions/index';
import { Redirect } from 'react-router-dom';
import Auth from "../Hoc/Auth";
import logo from "../Assets/images/logo.jpg"

function Header(props) {
  const logout = (e) => {
    e.preventDefault();
    props.onLogout();
  }
  return (
    <div className="slds-context-bar">
      {!props.user.token ? (<Redirect to='/' />) : null}
      <div className="slds-context-bar__primary">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
          <div className="slds-context-bar__icon-action">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </div>
      </div>
      <nav className="slds-context-bar__secondary slds-grid_reverse" role="navigation">
        <ul className="slds-grid">
          {props.user.token ? (
            <li className="slds-context-bar__item">
              <NavLink to="/dashboard" activeClassName='is-active' className="slds-context-bar__label-action" title="Dashboard">
                <span className="slds-truncate" title="Dashboard">Dashboard</span>
              </NavLink>
            </li>
          ) : null}
          {props.user.token ? (
            <li className="slds-context-bar__item">
              <NavLink activeClassName='is-active' to="/schedule" className="slds-context-bar__label-action" title="Schedule">
                <span className="slds-truncate" title="Schedule">Schedule</span>
              </NavLink>
            </li>
          ) : null}
          {props.user.token && !Auth.adminAuth ? (
            <li className="slds-context-bar__item">
              <NavLink activeClassName='is-active' to="/match" className="slds-context-bar__label-action" title="Matches">
                <span className="slds-truncate" title="Matches">Matches</span>
              </NavLink>
            </li>
          ) : null}
          {!props.user.token ? (
            <li className="slds-context-bar__item">
              <NavLink activeClassName='is-active' to="/" className="slds-context-bar__label-action" title="Login">
                <span className="slds-truncate" title="Login">Login</span>
              </NavLink>
            </li>
          ) : null}
          {!props.user.token ? (
            <li className="slds-context-bar__item">
              <NavLink activeClassName='is-active' to="/register" className="slds-context-bar__label-action" title="Register">
                <span className="slds-truncate" title="Register">Register</span>
              </NavLink>
            </li>
          ) : (
              <li className="slds-context-bar__item">
                <a href="/" onClick={logout} className="slds-context-bar__label-action" title="Logout">
                  <span className="slds-truncate" title="Logout">Logout</span>
                </a>
              </li>
            )}
        </ul>
      </nav >
    </div >
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);