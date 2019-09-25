import React from "react";
import counterpart from "counterpart";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";
import Feature from "./Feature";
import HomePage from "./HomePage";
import Templates from "./Templates";
import Login from "../Home/Login/Login";

import en from "../lang/en";
import es from "../lang/es";
import pt from "../lang/pt";
import Contact from "./Contact";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("es", es);
counterpart.registerTranslations("pt", pt);

counterpart.setLocale("en");

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      call: props.callbackFromParent,
      listLinkNav: props.listLinkNav
    };
  }
  state = {
    lang: "en"
  };
  onLangChange = e => {
    console.log(e.target.value);
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };
  handleCLick = event => {
    this.setState({ call: event.target.id });
    this.props.callbackFromParent(event.target.id);
  };

  render() {
    const { listLinkNav } = this.state;

    const items = listLinkNav.map((item, index) => (
      <NavLink
        id={index}
        key={index}
        to={item.to}
        onClick={this.handleCLick}
        style={item.style}
      >
        {item.title}
      </NavLink>
    ));

    return (
      <div>
        <div id="nav" style={navStyle}>
          <div id="listNav" style={listStyle}>
            {items}
          </div>
          <Link
            to="/login"
            style={loginButtonStyle}
            className="loginDefaultLink"
          >
            Login
          </Link>
        </div>

        <div>
          {/* <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route path="/login" component={Login} />
          </Switch> */}
        </div>
      </div>
    );
  }
}

const listStyle = {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "450px",
  color: "white"
};

const navStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "1200px",
  height: "200px",
  fontFamily: "Roboto",
  fontWeight: "normal",
  fontSize: "18px",
  paddingLeft: "100px",
  flexWrap: "wrap"
};

const loginButtonStyle = {
  border: "1px solid white",

  padding: "10px 25px",
  borderRadius: "5px"
};

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/feature",
    exact: true,
    component: Feature
  },
  {
    path: "/templates",
    exact: true,
    component: Templates
  },
  {
    path: "/contact",
    exact: true,
    component: Contact
  }
];

export default Nav;
