import React from "react";
import "./App.css";
import Home from "./Home/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Register from "./Home/Register";
import Login from "./Home/Login/Login";
import SignIn from "./Home/Sign-In/Sign-In";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" exact component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
