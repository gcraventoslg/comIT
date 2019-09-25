import React from "react";

import "../portfolio_components/createNewPortofolioStyle.css";
import templateImage from "../assets/templatesimgs/templatetwo.png";
import OptionList from "../common/OptionsList";
import actionList from "../common/actionList";
class TemplateSelected extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      templateTitle: props.title || "title site",
      img: "",
      publiched: props.publiched || false
    };
  }
  render() {
    const { templateTitle, publiched } = this.state;
    const templatetwo = "templatetwo.png";

    return (
      <div id="idTemplateSelected" style={componentTemplateStyle}>
        <img
          src={require(`../assets/templatesimgs/${templatetwo}`)}
          style={imgStyle}
        />
        <div style={divSelectedStyle}>
          <OptionList textTitle={"Actions"} listItems={actionList} />
          <div style={divInfoTemplateStyle}>
            <span style={{ textTransform: "uppercase" }}>{templateTitle}</span>
            <span style={{ fontSize: "14px" }}>
              {publiched ? "site published" : "site not published"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const componentTemplateStyle = {
  marginRight: "50px",
  marginBottom: "50px",
  position: "relative"
};

const imgStyle = {
  boxShadow: "8px 8px 6px rgba(0, 0, 0, .16)"
};

const divSelectedStyle = {
  position: "absolute",
  height: "120px",
  width: "390px",
  background: "white",
  right: 0,
  bottom: 0,
  color: "#707070",
  display: "flex",
  flexDirection: "column"
};

const divInfoTemplateStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px 30px",
  fontFamily: "Open Sans"
};
export default TemplateSelected;
