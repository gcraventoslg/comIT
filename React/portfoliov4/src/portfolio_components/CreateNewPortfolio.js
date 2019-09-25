import React from "react";
//import "./BoxComponent.css";
import { Link } from "react-router-dom";
import "../portfolio_components/createNewPortofolioStyle.css";

class CreateNewPortfolio extends React.Component {
  render() {
    return (
      <div id="box-template" className="box-template" style={boxTemplateStyle}>
        <div className="line-box-template" style={lineBoxTemplateStyle}></div>
        <span style={spanStyle}>Select a new Template</span>
        <Link
          to="/template-list"
          className="btnSelectTemplate background-gradient"
          style={btnStyle}
        >
          new
        </Link>
      </div>
    );
  }
}

const boxTemplateStyle = {
  border: "1px solid #707070",
  padding: "50px 50px",
  background: "white",
  boxShadow: "8px 8px 6px rgba(0, 0, 0, .16)",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  marginRight: "50px",
  marginBottom: "50px"
};

const lineBoxTemplateStyle = {
  width: "200px",
  display: "flex",
  background: "#7466C9",
  border: "2px solid #7466C9"
};

const spanStyle = {
  fontSize: "28px",
  fontFamily: "Open Sans, sans-serif",
  color: "#707070",
  textAlign: "center",
  padding: "50px 0px"
};

const btnStyle = {
  width: "200px",
  height: "50px",
  border: "1px solid #7466C9",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "28px",
  textTransform: "uppercase",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  color: "#0C6980",
  boxShadow: "2px 2px 6px rgba(49,48,48, 0.3)",
  textDecoration: "none"
};

export default CreateNewPortfolio;
