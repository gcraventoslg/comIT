import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import templateLIst from "./models/templateList";
import TemplateComponent from "./portfolio_components/TemplateComponent";

class TemplateList extends React.Component {
  constructor() {
    super();
    this.state = {
      templateLIst: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/demotemplates/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            templateLIst: result.templates
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { templateLIst } = this.state;
    const items = templateLIst.map((item, index) => {
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
};

export default TemplateList;
