import React from "react";
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

class HomeLayout extends React.Component {
  render(props) {
    return (
      <div>
        <h1>HomeLayout Page</h1>
        <ul>
          <Link to="/login">login</Link>
          <Link to="/foo">foo</Link>
          <Link to="/bar">bar</Link>
          <Link to="/contact">contact</Link>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
export default HomeLayout;
