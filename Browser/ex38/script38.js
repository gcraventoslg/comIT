const getKey = () => {
  const charCode = event.charCode;
  const pressedKey = String.fromCharCode(charCode);
  const div = document.querySelector("div");
  div.innerHTML += `<p>You pressed the ${pressedKey} key with the ${charCode} code</p>`;
};

window.onload = function() {
  const div = document.querySelector("div");
  div.style.color = "red";
  div.style.fontSize = "20px";
  div.style.fontFamily = "Arial";
  div.style.paddingBottom = "20px";
  const body = document.querySelector("body");
  body.addEventListener("keypress", getKey);
};
