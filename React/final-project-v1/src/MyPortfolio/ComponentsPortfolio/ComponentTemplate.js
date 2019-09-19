import React from "react";
//import "./BoxComponent.css";
import "./Corner.css";
import Optionist from "./OptionsList";

const componentTemplateListStyle = {
  display: "flex",
  flexDirection: "column",
  aligItems: "flex-start",
  marginRight: "50px",
  marginBottom: "50px"
};

const imgStyle = {
  boxShadow: "8px 8px 6px rgba(0, 0, 0, .16)"
};

const titleSpan = {
  textTransform: "uppercase",
  marginBottom: "20px",
  textAlign: "left",
  color: "#707070"
};

const displayBlock = {
  display: "block"
};
const displayNone = {
  display: "none"
};
const spanPriceStyle = {
  color: "white",
  background: "linear-gradient(#F79E05 0%, #C26F0F 100%)",
  padding: "4px 10px",
  borderRadius: "4px",
  fontWeight: "400",
  boxShadow: "0 3px 10px -5px rgba(0, 0, 0, 1)"
};

class ComponentTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templateTitle: props.title || "Title",
      price: props.price || "",
      img: props.imgSrc || "../../assets/templates/templatetwo.png",
      publiched: false,
      templateSpecification: [
        "Download Resume",
        "Add Contact Information",
        "Social Media Acocunt"
      ],
      selected: false,
      newTemplate: props.newTemplate || false
    };
  }
  render() {
    const {
      templateTitle,
      newTemplate,
      price,
      imgSrc,
      templateSpecification
    } = this.state;
    return (
      <div style={componentTemplateListStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span style={titleSpan}>{templateTitle}</span>
          <Optionist listItems={templateSpecification} left={"300px"} />
        </div>
        <div className="box">
          <img
            src={require("../../assets/templates/templatetwo.png")}
            alt=""
            style={imgStyle}
          />
          <div>
            <div
              className="ribbon"
              style={newTemplate || price ? displayBlock : displayNone}
            >
              <span style={newTemplate ? displayBlock : displayNone}>NEW</span>
              <span style={price ? spanPriceStyle : displayNone}>{price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentTemplate;
