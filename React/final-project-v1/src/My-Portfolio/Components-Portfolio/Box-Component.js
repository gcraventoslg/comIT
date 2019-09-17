import React from "react";
import "./Box-Component.css";
import { Link } from "react-router-dom";

class BoxComponent extends React.Component {
  render() {
    return (
      <div className="box-template">
        <div className="line-box-template"></div>
        <span>Select a new Template</span>
        <Link
          to="/new-portfolio"
          className="btnSelectTemplate background-gradient"
        >
          new
        </Link>
      </div>
    );
  }
}

export default BoxComponent;
