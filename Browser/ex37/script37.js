const getKey = () => {
  const charCode = event.charCode;
  const pressedKey = String.fromCharCode(charCode);
  console.log(`You pressed the ${pressedKey} key with the ${charCode} code`);
};

window.onload = function() {
  const body = document.querySelector("body");
  body.addEventListener("keypress", getKey);
};
