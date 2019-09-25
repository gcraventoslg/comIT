import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPorfolio from "./MainPorfolio";
const NewPortfolio = () => {
  return <h1>Nre</h1>;
};
const Nav = () => {
  return <h1>navvvv</h1>;
};

const ComponentRoute = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/
          template-list"
          component={NewPortfolio}
        />
        <Route exact path="/portfolio-online" component={MainPorfolio} />
      </Switch>
    </Router>
  );
};
function PortfolioOnline() {
  return (
    <div>
      {" "}
      <h1>PortfolioOnline</h1>
      <Nav />
      <ComponentRoute />
      {/*<Switch>
        <Route exact path="/portfolio-online" component={MainPorfolio} />
        <Route
          exact
          path="/portfolio-online/template-list"
          component={NewPortfolio}
        />
      </Switch>*/}
    </div>
  );
}

export default PortfolioOnline;
