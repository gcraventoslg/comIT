import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";

const students = ["Gloria", "Raventos", "Ladron", "Guevara"];
const List = props => {
  const { items } = props;
  const listItems = items.map(item => {
    return <li> {item}</li>;
  });
  return <ul>{listItems}</ul>;
};
const App = () => {
  return (
    <div>
      <Welcome message="Hello" name="GLoria" color="purple" />,
      <Welcome message="Hola" name="GLoria" color="red" />,
      <Welcome message="Oi" name="GLoria" color="green" />,
      <Welcome message="Ola" name="GLoria" color="blue" />;
      <List items={students} />
    </div>
  );
};

export default App;
