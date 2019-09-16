import React from "react";
import Translate from "react-translate-component";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>Home</div>
        <Translate content="title" component="h1" className="class" />
      </div>
    );
  }
}

export default Home;
