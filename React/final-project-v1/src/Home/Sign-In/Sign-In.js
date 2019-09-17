import React from "react";
import Translate from "react-translate-component";
import "./Sign-In.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const errorStyle = {
  color: "red",
  fontSize: "10px",
  textAlign: "left",
  fontStyle: "italic"
};
const SignIn = ({ values, handleSubmit, errors, touched }) => (
  <div className="background-gradient flex-display center-center">
    <div id="contentLogin">
      <div className="header-login flex-display">
        <Translate content="singIn" />
      </div>
      <div className="form-sign-in">
        <Form
          onSubmit={handleSubmit}
          id="formSignIn"
          className="flex-display flex-column"
        >
          <Translate content="username" component="label" htmlFor="username" />
          <Field type="text" name="username" />
          {touched.username && errors.username && (
            <span style={errorStyle}>{errors.username}</span>
          )}
          <Translate content="name" component="label" htmlFor="name" />
          <Field type="text" name="name" id="name" />
          {touched.name && errors.name && (
            <span style={errorStyle}>{errors.name}</span>
          )}
          <Translate content="email" component="label" htmlFor="email" />
          <Field type="text" name="email" />
          {touched.email && errors.email && (
            <span style={errorStyle}>{errors.email}</span>
          )}
          <Translate content="pass" component="label" htmlFor="password" />
          <Field type="password" name="password" id="password" />
          {touched.password && errors.password && (
            <span style={errorStyle}>{errors.password}</span>
          )}
          <Translate
            content="confirmPass"
            component="label"
            htmlFor="confirmPassword"
          />
          <Field type="password" name="confirmpassword" id="confirmpassword" />
          {touched.confirmpassword && errors.confirmpassword && (
            <span style={errorStyle}>{errors.confirmpassword}</span>
          )}
          <Translate
            content="singIn"
            component="button"
            type="submit"
            className="background-gradient"
          />
        </Form>
      </div>
    </div>
  </div>
);

const FormikApp = withFormik({
  mapPropsToValues({ username, name, email, password, confirmpassword }) {
    return {
      name: name || "",
      username: username || "",
      email: email || "",
      password: password || "",
      confirmpassword: confirmpassword || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    name: Yup.string().required(),
    email: Yup.string()
      .email("Email format")
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    confirmpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(SignIn);

export default FormikApp;
