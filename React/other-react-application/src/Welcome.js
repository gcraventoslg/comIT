import React from "react";
import ReactDOM from "react-dom";
class Welcome extends React.Component {
  render() {
    const { message, name, color } = this.props;
    return <h1 style={{ color: color }}>{`${message}  ${name}`}</h1>;
  }
}

/*const Welcome = props => {
  const { message, name, color } = props;
  return <h1 style={{ color: color }}>{`${message}  ${name}`}</h1>;
};*/

export default Welcome;
