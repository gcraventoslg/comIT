import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Foo from "./Foo";
import MainLayout from "./Main";
import Read from "./Read";
import HomeLayout from "./HomeLayout";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

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

/*const MainLayout = props => (
  <div>
    <h1>Main</h1>
    {props.children}
  </div>
);*/

const AltLayout = props => (
  <div>
    <h1>Alt</h1>
    {props.children}
  </div>
);

/*const Foo = () => <p>Foo</p>;*/

const Bar = () => <p>Bar</p>;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AppRoute exact path="/" layout={HomeLayout} component={HomePage} />
          <AppRoute
            exact
            path="/contact"
            layout={HomeLayout}
            component={ContactPage}
          />
          <AppRoute exact path="/foo" layout={MainLayout} component={Foo} />
          <AppRoute exact path="/bar" layout={AltLayout} component={Bar} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
