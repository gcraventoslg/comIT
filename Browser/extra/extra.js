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

  const createHeroList = function(hero) {
    listItem += `<li>${hero.toUpperCase()}</li>`;
  };

  const addHerosList = function() {
    listElement.innerHTML = listItem;
  };

  const buildList = function() {
    heros.forEach(createHeroList);
    addHerosList();
  };

  const getButton = document.querySelector("button");
  getButton.onclick = function() {
    const newHero = prompt("Input a new Hero Name");
    if (newHero) {
      createHeroList(newHero);
      addHerosList();
      heros.push(newHero);
    } else {
      alert("Enter a valid name");
    }
  };
  buildList();
};
