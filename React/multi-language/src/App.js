import React, { Component } from "react";
import "./App.css";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "./lang/en";
import es from "./lang/es";
import pt from "./lang/pt";
import Two from "./Two";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("es", es);
counterpart.registerTranslations("pt", pt);

counterpart.setLocale("en");

const Link = props => {
  return (
    <Translate
      content={props.cotent}
      component="a"
      href="//google.com"
      target="_blank"
    />
  );
};

class App extends Component {
  state = {
    lang: "en"
  };

  onLangChange = e => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };
  render() {
    const link = <Link cotent="link" />;

    return (
      <div className="App">
        <select value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="pt">PT</option>
        </select>
        <Translate content="title" component="h1" className="class" />
        <Translate content="copy.p1" component="p" unsafe={true} />
        <Translate content="copy.p2" component="p" with={{ link }} />
        <Two />
      </div>
    );
  }
}

export default App;
