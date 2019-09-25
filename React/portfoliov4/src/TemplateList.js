import React from "react";
import { Link } from "react-router-dom";
import templateLIst from "./models/templateList";
import TemplateComponent from "./portfolio_components/TemplateComponent";

class TemplateList extends React.Component {
  render() {
    const items = templateLIst.map((item, index) => {
      console.log(item);
      return (
        <TemplateComponent
          key={index}
          title={item.title}
          price={item.price}
          imgSrc={item.img}
          newTemplate={item.newTemplate}
        />
      );
    });
    return (
      <section style={sectionStyle}>
        <h1 style={titleStyle}>Template List</h1>
        <div style={divContent}>{items}</div>
      </section>
    );
  }
}

const sectionStyle = {
  padding: "0 90px"
};
const divContent = {
  display: "flex",
  flexWrap: "wrap"
};
const titleStyle = {
  padding: "20px 0px",
  fontWeight: "normal",
  fontSize: "24px",
  color: "#707070",
  textAlign: "left"
  //paddingBottom: "50px"
};

export default TemplateList;
