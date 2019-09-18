import React from "react";
import Translate from "react-translate-component";
import MainSection from "../ComponentsPortfolio/MainSection/MainSection";

class NewPortfolio extends React.Component {
  render() {
    const titleTranslate = <Translate content="newPortfolio" />;
    return <MainSection title={titleTranslate} new={false} />;
  }
}

export default NewPortfolio;
