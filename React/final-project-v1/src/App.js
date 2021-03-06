import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Feature from "./Home/Feature";
import Contact from "./Home/Contact";
import Login from "./Home/Login/Login";
import SignIn from "./Home/SignIn/SignIn";
import MyPorfolio from "./MyPortfolio/MyPortfolio";
import NewPortfolio from "./MyPortfolio/NewPortfolio/NewPortfolio";
import PostfolioSection from "./MyPortfolio/PortfolioSection/PortfolioSection";
import HomePage from "./Home/HomePage";
import Templates from "./Home/Templates";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <AppRoute exact path="/" layout={Home} component={HomePage} />
            <AppRoute exact path="/feature" layout={Home} component={Feature} />
            <AppRoute
              exact
              path="/templates"
              layout={Home}
              component={Templates}
            />
            <AppRoute exact path="/contact" layout={Home} component={Contact} />
            <AppRoute
              exact
              path="/new-portfolio"
              layout={MyPorfolio}
              component={NewPortfolio}
            />
            <AppRoute
              exact
              path="/my-portfolio"
              layout={MyPorfolio}
              component={PostfolioSection}
            />
            <AppRoute exact path="/login" layout={Login} />
            <AppRoute exact path="/register" layout={SignIn} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
