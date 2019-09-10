let counter = 0;
const increaseCounter = function() {
  ++counter;
  const div = document.querySelector("div");
  div.innerHTML = counter;
};

window.onload = function() {
  const firstButton = document.querySelector("#firstButton");
  firstButton.addEventListener("dblclick", increaseCounter);
};
