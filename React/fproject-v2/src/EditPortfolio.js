import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";

const Child = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
};

const Nav = () => {
  return (
    <Router>
      <h2>Accounts</h2>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/templates">
            Templates
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/modus-create">
            Modus Create
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={Child} />
      <Route path="/:id" component={Child} />
    </Router>
  );
};

function Home() {
  return <Nav />;
}

export default Home;
