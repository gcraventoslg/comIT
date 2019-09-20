import React from "react";
import counterpart from "counterpart";
import en from "../lang/en";
import es from "../lang/es";
import pt from "../lang/pt";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("es", es);
counterpart.registerTranslations("pt", pt);

counterpart.setLocale("en");

class SelectLang extends React.Component {
  constructor() {
    super();
    this.state = { lang: "en" };
  }
  onLangChange = e => {
    this.setState({ lang: e.target.value });
    counterpart.setLocale(e.target.value);
  };
  render() {
    return (
      <select
        style={selectLangStyle}
        value={this.state.lang}
        onChange={this.onLangChange}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="pt">PT</option>
      </select>
    );
  }
}

const selectLangStyle = {
  border: "none",
  background: "transparent",
  fontSize: "16px",
  marginRight: "155px"
};

export default SelectLang;
