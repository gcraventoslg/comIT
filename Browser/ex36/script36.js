const isOver = isOverEvent => {
  return isOverEvent
    ? { color: "red", fontWeight: "bold" }
    : { color: "black", fontWeight: "normal" };
};
const changeStyle = (event, isOverEvent) => {
  event.target.style.color = isOver(isOverEvent).color;
  event.target.style.fontWeight = isOver(isOverEvent).fontWeight;
};

window.onload = function() {
  const html = document.querySelector("html");
  const firstButton = document.querySelector("#firstButton");
  const secondButton = document.querySelector("#secondButton");
  const link = document.querySelector("a");
  const div = document.querySelector("#div-content");
  let body = document.querySelector("body");
  let listElement = document.createElement("ol");
  body.append(listElement);

  const createListItem = function(text) {
    let listItem = document.createElement("li");
    listItem.innerHTML = text;
    listElement.append(listItem);
  };

  let showMessageFunction;
  const showMesage = function(sms) {
    showMessageFunction = function() {
      alert(sms);
    };
    return showMessageFunction;
  };
  //firstButton.addEventListener('click', function(){showMesage("You clicked an event listened element")});
  firstButton.addEventListener(
    "click",
    showMesage("You clicked an event listened element")
  );
  secondButton.addEventListener("click", function() {
    firstButton.removeEventListener("click", showMessageFunction);
  });

  firstButton.addEventListener("mouseover", function() {
    createListItem(this.textContent);
  });

  secondButton.addEventListener("mouseover", function() {
    createListItem(this.textContent);
  });

  link.addEventListener("mouseover", function() {
    createListItem(this.textContent);
  });
  div.addEventListener("mouseover", () => {
    changeStyle(event, true);
  });
  div.addEventListener("mouseout", e => {
    changeStyle(event, false);
  });

  link.addEventListener("click", function(event) {
    event.preventDefault();
    alert(
      "This link doesn't send us to a differen page as we're preventing the default behaviour"
    );
  });

  html.addEventListener("click", function(event) {
    console.log(
      `Click possition: x-axis: ${event.screenX}, y-axis: ${event.screenY}`
    );
  });
};
