import React, { Suspense, lazy } from "react";
import { Route, Redirect } from "react-router-dom";
import Storage from "Utils/storage";


function Private({ component: Component, ...rest }) {
  const token = Storage.get("token");
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
export default Private;