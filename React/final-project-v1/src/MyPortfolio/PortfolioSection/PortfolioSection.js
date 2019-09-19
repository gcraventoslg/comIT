import React from "react";
import Translate from "react-translate-component";
import BoxComponent from "../ComponentsPortfolio/BoxComponent";
import TemplateSelected from "../ComponentsPortfolio/TemplateSelected";

class PortfolioSection extends React.Component {
  render() {
    const titleTranslate = <Translate content="myPortfolio" />;
    return (
      <section className="main-workspace">
        <h1>{titleTranslate}</h1>
        <div id="content-templates">
          <TemplateSelected title={"developer"} publiched={false} />
          <BoxComponent />
        </div>
      </section>
    );
  }
}

export default PortfolioSection;
