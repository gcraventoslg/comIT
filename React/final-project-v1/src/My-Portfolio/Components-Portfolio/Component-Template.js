import React from "react";
import "./Box-Component.css";
import { Link } from "react-router-dom";
import { templateOne } from "../../assets/templates/templateOne.png";

class ComponentTemplate extends React.Component {
  render() {
    return (
      <div className="box-template">
        <div className="line-box-template"></div>
        <span>Component Template</span>
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

export default ComponentTemplate;
