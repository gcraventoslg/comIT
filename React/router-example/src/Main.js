import React from "react";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

class MainLayout extends React.Component {
  render(props) {
    return (
      <div>
        <h1>MainLayout Page</h1>
        {this.props.children}
      </div>
    );
  }
}
export default MainLayout;
