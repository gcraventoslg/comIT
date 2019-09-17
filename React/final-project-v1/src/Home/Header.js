import React from "react";
import { Link } from "react-router-dom";
import counterpart from "counterpart";

import en from "../lang/en";
import es from "../lang/es";
import pt from "../lang/pt";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("es", es);
counterpart.registerTranslations("pt", pt);

counterpart.setLocale("en");

class Header extends React.Component {
  state = {
    lang: "en"
  };
  onLangChange = e => {
    console.log(e.target.value);
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };
  render() {
    return (
      <div>
        <h1>Header Home Page</h1>
        <nav>
          <select value={this.state.lang} onChange={this.onLangChange}>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="pt">PT</option>
          </select>

          <div className="dropdown">
            EN
            <div id="myDropdown" className="dropdown-content">
              <a href="#">SP</a>
              <a href="#">PT</a>
            </div>
          </div>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Sign In</li>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
