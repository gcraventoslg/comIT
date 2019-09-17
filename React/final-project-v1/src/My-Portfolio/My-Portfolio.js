import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderPortfolio from "./Header-Portfolio/Header-Portfolio";
import NewPortfolio from "./New-Portfolio/New-Portfolio";
import PostfolioSection from "./Portfolio-Section/Portfolio-Section";

class MyPortfolio extends React.Component {
  render() {
    return (
      <div>
        <HeaderPortfolio />
        <Switch>
          <Route path="/my-portfolio" exact component={PostfolioSection} />
          <Route path="/new-portfolio" exact component={NewPortfolio} />
        </Switch>
      </div>
    );
  }
}

export default MyPortfolio;
