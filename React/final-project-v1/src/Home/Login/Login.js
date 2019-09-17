import React from "react";
import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import googleingImg from "../../assets/icons/google_icon.png";
import linkedingImg from "../../assets/icons/linkeding_icon.png";
import "./Login-Style.css";

class Login extends React.Component {
  render() {
    return (
      <div className="background-gradient flex-display center-center div-contect">
        <div id="contentLogin">
          <div className="header-login flex-display">Login</div>
          <div className="form-login">
            <form id="formLogin" className="flex-display flex-column">
              <Translate content="emailOrUsername" component="label" />
              <input type="text" name="username" id="username" />

              <Translate content="pass" component="label" />
              <input type="password" name="password" id="password" />

              <Translate content="passForgot" id="forgot-pass" />

              <button className="background-gradient">
                <Link to="my-portfolio">login</Link>
              </button>
            </form>
          </div>
          <div className="other-option-login flex-display flex-column center-center">
            <Translate content="signOther" />
            <div id="content-media-icons">
              <img src={googleingImg} alt="" />
              <img src={linkedingImg} alt="" />
            </div>
            <Link to="/register">
              <Translate id="sign-up-link" content="signUp" target="_blank" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
