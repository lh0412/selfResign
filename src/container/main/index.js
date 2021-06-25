/**
 * 登陆后页面
 */
import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "Components/Loading";
const Home = lazy(() => import(/* webpackChunkName: "Login" */ "./home"));
function Main() {
  return <React.Fragment>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" componnet={Home} />
      </Switch>
    </Suspense>
  </React.Fragment>
}
export default Main;