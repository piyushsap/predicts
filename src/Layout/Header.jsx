import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Store/actions/index';
import { Redirect } from 'react-router-dom';

function Header(props) {
  const logout = (e) => {
    e.preventDefault();
    console.log(e);
    props.onLogout();
  }
  console.log(props.location);
  return (
    <div className="slds-context-bar">
      {!props.user.token ? (<Redirect to='/' />) : null}
      <div className="slds-context-bar__primary">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
          <div className="slds-context-bar__icon-action">
            <button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
              <span className="slds-icon-waffle">
                <span className="slds-r1"></span>
                <span className="slds-r2"></span>
                <span className="slds-r3"></span>
                <span className="slds-r4"></span>
                <span className="slds-r5"></span>
                <span className="slds-r6"></span>
                <span className="slds-r7"></span>
                <span className="slds-r8"></span>
                <span className="slds-r9"></span>
              </span>
              <span className="slds-assistive-text">Open App Launcher</span>
            </button>
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name">
            <span className="slds-truncate" title="Predict">Predict</span>
          </span>
        </div>
      </div>
      <nav className="slds-context-bar__secondary slds-grid_reverse" role="navigation">
        <ul className="slds-grid">
          {props.user.token ? (
            <li className="slds-context-bar__item slds-is-active">
              <Link to="/" className="slds-context-bar__label-action" title="Dashboard">
                <span className="slds-assistive-text">Current Page:</span>
                <span className="slds-truncate" title="Dashboard">Dashboard</span>
              </Link>
            </li>
          ) : null}
          {props.user.token ? (
            <li className="slds-context-bar__item">
              <Link to="/schedule" className="slds-context-bar__label-action" title="Schedule">
                <span className="slds-truncate" title="Schedule">Schedule</span>
              </Link>
            </li>
          ) : null}
          {props.user.token ? (
            <li className="slds-context-bar__item">
              <Link to="/match" className="slds-context-bar__label-action" title="Matches">
                <span className="slds-truncate" title="Matches">Matches</span>
              </Link>
            </li>
          ) : null}
          {!props.user.token ? (
            <li className="slds-context-bar__item">
              <Link to="/" className="slds-context-bar__label-action" title="Login">
                <span className="slds-truncate" title="Login">Login</span>
              </Link>
            </li>
          ) : null}
          {!props.user.token ? (
            <li className="slds-context-bar__item">
              <Link to="/register" className="slds-context-bar__label-action" title="Register">
                <span className="slds-truncate" title="Register">Register</span>
              </Link>
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