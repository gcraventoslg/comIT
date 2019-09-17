import React from "react";
import BoxComponent from "../Box-Component";
import "./Main-Section.css";

class MainSection extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <section className="main-workspace">
        <h1>{title}</h1>
        <div id="content-templates">
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </div>
      </section>
    );
  }
}

export default MainSection;
