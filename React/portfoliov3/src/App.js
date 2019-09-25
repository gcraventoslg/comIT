import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import OnlinePortfoliofrom from "./OnlinePortfolio";
import Topics from "./Topics";
import Home from "./Home";
import "./App.css";

/*function App() {
  return {
    <div>
      <header>
        <ul>
          <li>
            <Link to="online-portfolio">Main</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/online-portfolio" component={OnlinePortfoliofrom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
  </div>
  };
}*/

//export default App;
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/online-portfolio" component={OnlinePortfoliofrom} />
      {/*<Route path="/topics" component={Topics} />*/}

      <Route exact path="/" component={Home} />
    </div>
  );
}

/*function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}*/

/*function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}*/

export default App;
