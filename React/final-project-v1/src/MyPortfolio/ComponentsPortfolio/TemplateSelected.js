import React from "react";
import Optionist from "./OptionsList";

const componentTemplateStyle = {
  display: "flex",
  aligItems: "center",
  justifyContent: "space-evenly",
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
  background: "rgba(255,255,255,0.9)",
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

class TemplateSelected extends React.Component {
  constructor(props) {
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
      <div style={componentTemplateStyle}>
        <img
          src={require(`../../assets/templates/${templatetwo}`)}
          alt=""
          style={imgStyle}
        />
        <div style={divSelectedStyle}>
          <Optionist
            textTitle={"Actions"}
            listItems={["Edit", "Preview", "Configuration", "Delete"]}
          />
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

export default TemplateSelected;
