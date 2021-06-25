/**
 * root container
 */
import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "Component/Loading";

const Login = lazy(() => import("./login"));
const Main = lazy(() => import("./main"));

function App() {
  return <Suspense fallback={<Loading />}>
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Main} />
    </Router>
  </Suspense>
}
export default App;