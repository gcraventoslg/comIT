import React from "react";
import "./App.css";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./Home/Login/Login";

import SignIn from "./Home/SignIn/SignIn";
import MyPorfolio from "./MyPortfolio/MyPortfolio";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" exact component={SignIn} />
          <Route path="/my-portfolio" exact component={MyPorfolio} />
          <Route path="/new-portfolio" exact component={MyPorfolio} />
        </Switch>
      </div>
    );
  }
}

export default App;
