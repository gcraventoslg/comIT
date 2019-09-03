window.onload = function() {
  const heros = [
    "black widow",
    "iron man",
    "hulk",
    "thor",
    "war machine",
    "spiderman",
    "ant-man",
    "captian america",
    "hawkeye",
    "black panther",
    "doctor strange"
  ];

  const listElement = document.querySelector("#avengerList");

  let listItem = "";
  heros.forEach(element => {
    listItem += `<li>${element.toUpperCase()}</li>`;
  });
  listElement.innerHTML = listItem;

  const getButton = document.querySelector("button");
  getButton.onclick = function() {
    const newHero = prompt("Input a new Hero Name");
    if (newHero) {
      listItem += `<li>${newHero.toUpperCase()}</li>`;
      listElement.innerHTML = listItem;
    } else {
      alert("Enter a valid name");
    }
  };

  console.log(listElement);
};
