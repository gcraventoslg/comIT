import React from "react";

import Counter from "./Counter";

const App = () => {
  const promptIndex = prompt("please enter a value");
  return (
    <div className="App">
      <Counter init={5} index={parseInt(promptIndex)} />
      <Counter init={7} />
    </div>
  );
};

export default App;
