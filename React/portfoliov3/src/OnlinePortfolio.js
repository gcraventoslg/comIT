import React from "react";
import { Route, Link, Switch } from "react-router-dom";

function MainPage() {
  return <h1>main</h1>;
}

const TemplateList = () => {
  return <h1>Template lost</h1>;
};

function OnlinePortfolio({ match }) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to={`${match.url}`}>OnlinePortfolio</Link>
          </li>
          <li>
            <Link to={`${match.url}/template-list`}>list</Link>
          </li>
        </ul>
      </header>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default OnlinePortfolio;
