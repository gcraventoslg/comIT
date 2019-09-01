window.onload = function() {
  const body = document.querySelector("body");

  body.onkeypress = function(event) {
    let key = event.key;
    let colorSelected = "";
    let letterAdd = "";
    if (
      key === "a" ||
      key === "e" ||
      key === "i" ||
      key === "o" ||
      key === "u"
    ) {
      switch (key) {
        case "a":
          colorSelected = "red";
          break;
        case "e":
          colorSelected = "blue";

          break;
        case "i":
          colorSelected = "green";
          break;
        case "o":
          colorSelected = "pink";
          break;
        case "u":
          colorSelected = "purple";
          break;
      }
      letterAdd = `<span class="${colorSelected} bold"> ${key} </span>`;
    } else {
      letterAdd = `<span> ${key} </span>`;
    }

    body.innerHTML += letterAdd;
  };
};
