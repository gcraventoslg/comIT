import React from "react";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

class Foo extends React.Component {
  render() {
    return (
      <div>
        <h1>Foo Page</h1>
        <ul>
          <Link to="/login">login</Link>
        </ul>
      </div>
    );
  }
}
export default Foo;
