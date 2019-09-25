import React from "react";
import "./Corner.css";
import Optionist from "../common/OptionsList";

const firstLabel = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px"
};

class TemplateComponent extends React.Component {
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
    const templatetwo = "templatetwo.png";
    const {
      templateTitle,
      newTemplate,
      price,
      img,
      templateSpecification
    } = this.state;
    console.log(img);
    let flexJustify = "space-between";
    if (!newTemplate && price) {
      flexJustify = "flex-end";
    }

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
            src={require(`../assets/templatesimgs/${img}`)}
            alt=""
            className="select-imagen-template"
          />
          <div style={labelTop}>
            <div style={{ ...firstLabel, justifyContent: flexJustify }}>
              <span
                style={
                  newTemplate
                    ? {
                        ...spanPriceStyle,
                        background:
                          "linear-gradient(rgb(60, 191, 56) 0%, rgb(54, 109, 46) 100%)"
                      }
                    : displayNone
                }
              >
                NEW
              </span>
              <span style={price ? spanPriceStyle : displayNone}>{price}</span>
            </div>
            <div style={selectContentTagStyle}>
              <span id="selectTemplate">Select</span>
            </div>
          </div>
          <div>
            {/*<div
              className="ribbon"
              style={newTemplate || price ? displayBlock : displayNone}
            >
              <span style={newTemplate ? displayBlock : displayNone}>NEW</span>
              <span style={price ? spanPriceStyle : displayNone}>{price}</span>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

const selectContentTagStyle = {
  display: "flex",
  justifyContent: "flex-end"
};
const labelTop = {
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "380px",
  height: "320px"
};
const componentTemplateListStyle = {
  display: "flex",
  flexDirection: "column",
  aligItems: "flex-start",
  paddingRight: "50px",
  paddingBottom: "50px"
};

/*const imgStyle = {
  boxShadow: "5px 5px 6px rgba(0, 0, 0, .16)",
  border: "1px solid rgba(112, 112, 112,0.2)"
};*/

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

export default TemplateComponent;
