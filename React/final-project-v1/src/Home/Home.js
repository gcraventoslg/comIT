import React from "react";
import Translate from "react-translate-component";
import Header from "./Header";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
        </Router>
        {/*<div>Home</div>
        <Translate content="title" component="h1" className="class" />*/}
        <Router>
          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default Home;
