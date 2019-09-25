import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Portfolio from "./PortfolioOnline";
import { MainPorfolio } from "./MainPorfolio";
import ListItemLink from "./ListItemLink";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const Login = () => {
  return <h1>Login page</h1>;
};
const Register = () => {
  return <h1>register page</h1>;
};
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/*<Route exact path="/portfolio-online" component={Portfolio} />*/}
      </Switch>
    </Router>
  );
}

export default App;
