import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const App = ({ values, handleSubmit, errors, touched }) => (
  <Form>
    <div>
      <Field type="email" name="email" placeholder="Email" />
      {touched.email && errors.email && <p>{errors.email}</p>}
    </div>
    <div>
      <Field type="password" name="password" placeholder="Password" />
      {touched.password && errors.password && <p>{errors.password}</p>}
    </div>
    <button type="submit">Submit</button>
  </Form>
);
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
})(App);

export default FormikApp;
