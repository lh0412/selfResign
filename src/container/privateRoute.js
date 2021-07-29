import React from "react";
import { Route, Redirect } from "react-router-dom";
import Storage from "Utils/storage";

function Private(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest}
      render={(props) => {
        return Storage.get('token') ? (
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
export default Private;