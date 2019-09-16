import React, { Component } from "react";
import "./App.css";
import Translate from "react-translate-component";
import counterpart from "counterpart";

class Two extends Component {
  render() {
    const placeholder = counterpart.translate("placeholder");
    return (
      <div>
        <Translate
          component="input"
          type="text"
          attributes={{ placeholder: "placeholder" }}
        />

        <input type="text" placeholder={placeholder} />
      </div>
    );
  }
}

export default Two;
