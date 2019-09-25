import React, { Fragment } from "react";
import HomeImg from "../src/img/header/group28.png";
import templateImg from "../src/img/header/group29.png";
import ContactImg from "../src/img/header/group30.png";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import navList from "./navList";
const HomePage = () => {
  return (
    <section style={sectionStyle}>
      <div style={insideSectionStyle}>
        <div style={descriptionImgsStyle}>
          <span>Select a Templare</span>
          <span>Edit your Templare</span>
          <span></span>
        </div>
        <div style={{ position: "relative" }}>
          <img src={HomeImg} style={{ position: "absolute", left: "100px" }} />
          <img
            src={templateImg}
            style={{ position: "absolute", left: "300px", top: "25px" }}
          />
          <img
            src={ContactImg}
            style={{ position: "absolute", left: "500px", top: "65px" }}
          />
        </div>
      </div>
      <div style={contenHeaderStyle}>
        <h1>Create Online Portfolio</h1>
        <NavLink to="/register">Sign In</NavLink>
      </div>
    </section>
  );
};

const Feature = () => {
  return <h1>Feature page</h1>;
};

const Template = () => {
  return <h1>Template page</h1>;
};

const Contact = () => {
  return <h1>Contact page</h1>;
};

const ComponentRoute = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/features" component={Feature} />
      <Route exact path="/templates" component={Template} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
};
const Nav = () => {
  const listItems = navList.map((item, index) => (
    <NavLink key={index} activeClassName="selected" to={item.to}>
      {item.content}
    </NavLink>
  ));
  return (
    <header style={headerStyle}>
      <NavLink to="/">Logo</NavLink>
      <nav className="marginR" style={navStyle}>
        {listItems}
      </nav>
      <NavLink to="/login">Login</NavLink>
    </header>
  );
};

function Home() {
  return (
    <div style={containerStyle}>
      <Nav />
      <ComponentRoute />
    </div>
  );
}
const sectionStyle = {
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: "120px"
};
const insideSectionStyle = {
  display: "flex",
  flexDirection: "column",
  width: "700px",
  marginTop: "70px"
};
const descriptionImgsStyle = {
  width: "700px",
  display: "flex",
  justifyContent: "space-evenly",
  padding: "40px 10px"
};
const contenHeaderStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "120px",
  paddingRight: "180px"
};

const headerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "100px 180px 0 180px"
};

const navStyle = {
  display: "flex",
  justifyContent: "flex-start",
  fontSize: "20px",
  minWidth: "700px",
  fontWeight: "normal"
};

const containerStyle = {
  minHeight: "720px",
  minWidth: "1200px",
  background: "linear-gradient(151deg,#C26DBC,#3CACAE)",
  fontFamily: "Roboto"
};

export default Home;
