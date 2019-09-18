import React from "react";
import BoxComponent from "../BoxComponent";
import ComponentTemplate from "../ComponentTemplate";
import "./MainSection.css";

class MainSection extends React.Component {
  constructor(props) {
    //console.log(props);
    super();
    this.state = {
      title: props.title,
      new: props.new
    };
  }

  render() {
    return (
      <section className="main-workspace">
        <h1>{this.state.title}</h1>
        <div id="content-templates">
          <ComponentTemplate />
          {this.state.new && <BoxComponent />}
        </div>
      </section>
    );
  }
}

export default MainSection;
