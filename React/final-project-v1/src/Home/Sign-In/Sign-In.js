import React from "react";
import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import "./Sign-In.css";

class SignIn extends React.Component {
  render() {
    return (
      <div class="background-gradient flex-display center-center">
        <div id="contentLogin">
          <div class="header-login flex-display">Sign In</div>
          <div class="form-sign-in">
            <form id="formSignIn" class="flex-display flex-column">
              <label for="username">
                Username <span class="required-symbol">*</span>
              </label>
              <input type="text" name="username" id="username" />
              <label for="name">
                Name <span class="required-symbol">*</span>
              </label>
              <input type="text" name="name" id="name" />
              <label for="email">
                Email <span class="required-symbol">*</span>
              </label>
              <input type="email" name="email" id="email" />
              <label for="password">
                Password<span class="required-symbol">*</span>
              </label>
              <input type="password" name="password" id="password" />
              <label for="password">
                Confirm Password<span class="required-symbol">*</span>
              </label>
              <input type="password" name="password" id="password" />

              <button class="background-gradient">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
