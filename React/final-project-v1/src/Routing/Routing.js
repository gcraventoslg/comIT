import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "../Home/Home";
import Login from "../Home/Home";
import Register from "../Home/Register";

const Routing = (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
);
//ReactDOM.render(routing, document.getElementById("root"));

export default Routing;
