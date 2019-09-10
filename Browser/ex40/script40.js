let color = "";
let counter = 1;
const selectColor = () => {
  switch (counter) {
    case 1:
      color = "red";
      break;
    case 2:
      color = "blue";
      break;
    case 3:
      color = "green";
      break;
    case 4:
      color = "gray";
      break;

    default:
      color = "white";
      break;
  }
};
window.onload = () => {
  const link = document.querySelector("a");
  const mouseOverEvent = () => {
    selectColor();
    link.style.color = color;
    counter++;
  };
  const mouseOutEvent = () => {
    alert(`The link background color is: ${color}`);
  };

  link.addEventListener("mouseover", mouseOverEvent);
  link.addEventListener("mouseout", mouseOutEvent);
};
