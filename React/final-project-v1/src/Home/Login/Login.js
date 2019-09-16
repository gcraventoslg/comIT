import React from "react";
import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import "./Login-Style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="background-gradient flex-display center-center div-contect">
        <div id="contentLogin">
          <div className="header-login flex-display">Login</div>
          <div className="form-login">
            <form id="formLogin" className="flex-display flex-column">
              <label>
                <Translate content="emailOrUsername" />
                <span className="required-symbol">*</span>
              </label>
              <input type="text" name="username" id="username" />
              <label>
                <Translate content="pass" />
                <span className="required-symbol">*</span>
              </label>
              <input type="password" name="password" id="password" />
              <Translate content="passForgot" id="forgot-pass" />
              <button className="background-gradient">login</button>
            </form>
          </div>
          <div className="other-option-login flex-display flex-column center-center">
            <Translate content="signOther" />
            <div id="content-media-icons">
              <img src="assets/icons/google_icon.png" alt="" />
              <img src="assets/icons/linkeding_icon.png" alt="" />
            </div>
            <Link to="/register">
              <Translate
                id="sign-up-link"
                content="signUp"
                component="a"
                target="_blank"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
