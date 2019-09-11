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
  const firstButton = document.querySelector("#firstButton");
  const div = document.querySelector("#div-content");
  let body = document.querySelector("body");
  let listElement = document.createElement("ol");
  body.append(listElement);
  const childrenDiv = div.children;

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

  for (let i = 0; i < childrenDiv.length; i++) {
    childrenDiv[i].addEventListener("mouseover", function() {
      createListItem(this.textContent);
    });
  }
  div.addEventListener("mouseover", () => {
    changeStyle(event, true);
  });
  div.addEventListener("mouseout", e => {
    changeStyle(event, false);
  });
};
