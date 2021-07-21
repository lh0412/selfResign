/**
 * root container
 */
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Loading from "Components/Loading";
import { store } from "../store";
import { Provider, connect } from "react-redux";
import "../style/index.less";



const Login = lazy(() => import("./login"));
const Main = lazy(() => import("./main"));
const PrivateRoute = lazy(() => import("./privateRoute"));

function Routes(props) {
  return <Suspense fallback={<Loading />}>
    <Router>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path={`/`} component={Main} {...props} />
    </Router>
  </Suspense>
}
function App() {
  return <Provider store={store}>
    <Routes />
  </Provider>
}
export default App;