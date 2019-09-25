import React from "react";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

class Read extends React.Component {
  render() {
    return (
      <div>
        <h1>Read Page</h1>
        <ul>
          <Link to="/login">login</Link>
        </ul>
      </div>
    );
  }
}
export default Read;
