import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import MainPortfolio from "./MainPortfolio";
import TemplateList from "./TemplateList";
import TemplateEdit from "./TemplateEdit";
import HeaderMyPortfolio from "./common/HeaderPortfolio";

function App() {
  return (
    <div>
      <HeaderMyPortfolio />
      <Route exact path="/" component={MainPortfolio} />
      <Route path="/template-list" component={TemplateList} />
      <Route path="/template/edit/:id/:templatename" component={TemplateEdit} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
