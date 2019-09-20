import React from "react";
import Translate from "react-translate-component";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Home Page</h1>
          <Translate content="myPortfolio" />
        </div>
      </div>
    );
  }
}

export default HomePage;
