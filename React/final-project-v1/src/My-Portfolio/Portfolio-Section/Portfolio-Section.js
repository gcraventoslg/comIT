import React from "react";
import Translate from "react-translate-component";

import MainSection from "../Components-Portfolio/Main-Section/Main-Section";

class PortfolioSection extends React.Component {
  render() {
    const titleTranslate = <Translate content="myPortfolio" />;
    return <MainSection title={titleTranslate} new={true} />;
  }
}

export default PortfolioSection;
