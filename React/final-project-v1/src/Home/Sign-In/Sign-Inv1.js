import React from "react";
import Translate from "react-translate-component";
import "./Sign-In.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

class SignIn extends React.Component {
  render() {
    return (
      <div className="background-gradient flex-display center-center">
        <div id="contentLogin">
          <div className="header-login flex-display">
            <Translate content="singIn" />
          </div>
          <div className="form-sign-in">
            <form id="formSignIn" className="flex-display flex-column">
              <Translate
                content="username"
                component="label"
                htmlFor="username"
              />
              <input type="text" name="username" id="username" />

              <Translate content="name" component="label" htmlFor="name" />
              <input type="text" name="name" id="name" />

              <Translate content="email" component="label" htmlFor="email" />
              <input type="email" name="email" id="email" />

              <Translate content="pass" component="label" htmlFor="password" />
              <input type="password" name="password" id="password" />

              <Translate
                content="confirmPass"
                component="label"
                htmlFor="confirmPassword"
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />

              <Translate
                content="singIn"
                component="button"
                type="submit"
                className="background-gradient"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(SignIn);

export default FormikApp;
