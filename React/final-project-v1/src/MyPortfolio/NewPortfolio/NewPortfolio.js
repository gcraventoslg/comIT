import React from "react";
import Translate from "react-translate-component";
//import MainSection from "../ComponentsPortfolio/MainSection/MainSection";
import ComponentTemplate from "../ComponentsPortfolio/ComponentTemplate";

class NewPortfolio extends React.Component {
  render() {
    const titleTranslate = <Translate content="newPortfolio" />;
    /*return <MainSection title={titleTranslate} new={false} />;*/
    return (
      <section className="main-workspace">
        <h1>{titleTranslate}</h1>
        <div id="content-templates">
          <ComponentTemplate
            title={"Basic portfolio"}
            price={0}
            imgSrc={"../../assets/templates/templatetwo.png"}
            newTemplate={true}
          />
          <ComponentTemplate />
          <ComponentTemplate
            title={"Image portfolio"}
            price={50}
            imgSrc={"../../assets/templates/templatetwo.png"}
            newTemplate={true}
          />
          <ComponentTemplate />
          <ComponentTemplate
            title={"Image portfolio advance"}
            price={120}
            imgSrc={"../../assets/templates/templatetwo.png"}
            newTemplate={false}
          />
        </div>
      </section>
    );
  }
}

export default NewPortfolio;
