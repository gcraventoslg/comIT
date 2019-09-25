import React from "react";
import CreateNewPortfolio from "./portfolio_components/CreateNewPortfolio";
import TemplateSelected from "./portfolio_components/TemplateSelected";
import { Link } from "react-router-dom";

function MainPortfolio() {
  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Main Portfolio</h1>
      <div style={divContent}>
        <TemplateSelected title={"developer"} publiched={false} />

        {/*<Link style={linkStyle} to="/template/edit/12/basictemplate">
          Template Selected{" "}
        </Link>
        <Link style={linkStyle} to="/template/edit/14/complextemplate">
          Template Selected{" "}
        </Link>*/}

        <CreateNewPortfolio />
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: "0 90px"
};

const divContent = {
  display: "flex",
  flexWrap: "wrap"
};
const linkStyle = {
  marginLeft: "50px",
  marginBottom: "50px"
};
const titleStyle = {
  padding: "20px 0px",
  fontWeight: "normal",
  fontSize: "24px",
  color: "#707070",
  textAlign: "left"
  //paddingBottom: "50px"
};

export default MainPortfolio;
