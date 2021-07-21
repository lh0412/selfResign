import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


function Private(props) {
  const { component: Component, token, ...rest } = props;
  return (
    <Route {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: `/login` }}
            />
          )
      }
      }
    />
  )
}
const mapStateToProps = state => ({
  token: state.loginreducer.token
})
const mapDispatchToProps = dispatch => ({})
const PrivateRoute = connect(mapStateToProps, mapDispatchToProps)(Private);
export default PrivateRoute;