import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {} from "react-router-dom";

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

const MainLayout = props => (
  <div>
    <h1>Main</h1>
    {props.children}
  </div>
);

const AltLayout = props => (
  <div>
    <h1>Alt</h1>
    {props.children}
  </div>
);

const Foo = () => <p>Foo</p>;

const Bar = () => <p>Bar</p>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <AppRoute exact path="/foo" layout={MainLayout} component={Foo} />
            <AppRoute exact path="/bar" layout={AltLayout} component={Bar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
