import React from "react";
import Nav from "./Nav";
import listLink from "./LinkNavHome";
import SelectLang from "./SelectLang";

class Header extends React.Component {
  constructor(props, match) {
    super(props);
    this.state = {
      backgroundColor: "#0476D0",
      backgroundImages: "linear-gradient(111deg,#0476D0,#2CEEF0)"
    };
    console.log(match);
  }
  myCallback = dataFromChild => {
    const getSelectedLink = listLink.filter((item, index) => {
      return index === parseInt(dataFromChild);
    });
    this.setState({
      backgroundColor: getSelectedLink[0].backgroundColor,
      backgroundImages: getSelectedLink[0].backgroundImages
    });
  };

  render() {
    const { backgroundColor, backgroundImages } = this.state;
    return (
      <div
        id="header"
        style={{
          ...headerStyle,
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImages
        }}
      >
        <div style={contentLang}>
          <SelectLang />
        </div>
        {/* <Nav callbackFromParent={this.myCallback} listLinkNav={listLink} /> */}
      </div>
    );
  }
}
const contentLang = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end"
};

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "30px 40px",
  height: "560px",
  position: "relative",
  width: "auto",
  overflow: "hidden"
};

export default Header;
