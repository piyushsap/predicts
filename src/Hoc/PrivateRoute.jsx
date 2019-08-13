import React from "react";
import { Redirect,Route  } from "react-router-dom";
import Auth from "./Auth";
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          Auth.authenticate() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute