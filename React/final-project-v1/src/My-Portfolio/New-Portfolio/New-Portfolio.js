import React from "react";
import Translate from "react-translate-component";
import MainSection from "../Components-Portfolio/Main-Section/Main-Section";

class NewPortfolio extends React.Component {
  render() {
    const titleTranslate = <Translate content="newPortfolio" />;
    return <MainSection title={titleTranslate} />;
  }
}

export default NewPortfolio;
