import React from "react";
import "./BoxComponent.css";

const componentTemplateStyle = {
  display: "flex",
  aligItems: "center",
  justifyContent: "Center",
  //border: "1px solid #707070",

  alignItems: "center",
  justifyContent: "space-evenly",
  marginRight: "50px",
  marginBottom: "50px"
};

const imgStyle = {
  boxShadow: "8px 8px 6px rgba(0, 0, 0, .16)"
};

class ComponentTemplate extends React.Component {
  render() {
    return (
      <div style={componentTemplateStyle}>
        <img
          src={require("../../assets/templates/templatetwo.png")}
          alt=""
          style={imgStyle}
        />
      </div>
    );
  }
}

export default ComponentTemplate;
