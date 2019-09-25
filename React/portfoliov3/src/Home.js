import React from "react";
import { Route, Link, Switch } from "react-router-dom";

function Home({ match }) {
  console.log(match);
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to={"/rendering"}>Rendering with React-{match.path}</Link>
        </li>
        <li>
          <Link to={"/components"}>Components</Link>
        </li>
        <li>
          <Link to={"/props-v-state"}>Props v. State</Link>
        </li>
      </ul>

      <Route exact path={`/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  console.log(match);
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Home;
