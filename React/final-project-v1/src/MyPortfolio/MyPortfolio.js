import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderPortfolio from "./HeaderPortfolio/HeaderPortfolio";
import NewPortfolio from "./NewPortfolio/NewPortfolio";
import PostfolioSection from "./PortfolioSection/PortfolioSection";

class MyPortfolio extends React.Component {
  render() {
    return (
      <div>
        <HeaderPortfolio />
        <Switch>
          {/*<Route path="/my-portfolio" exact component={PostfolioSection} />
          <Route path="/new-portfolio" exact component={NewPortfolio} />*/}
        </Switch>
      </div>
    );
  }
}

export default MyPortfolio;
