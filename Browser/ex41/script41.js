window.onload = function() {
  const list = document.createElement("ul");
  const weeklyChores = [
    "To clean the aparment",
    "To wash the clothes",
    "To sweep the aparment",
    "To organize the closet",
    "To cook"
  ];

  const strikedToggle = function() {
    event.target.classList.toggle("striked");
  };
  weeklyChores.forEach(chore => {
    const listItem = document.createElement("li");
    listItem.innerHTML = chore;
    listItem.addEventListener("click", strikedToggle);
    list.append(listItem);
  });

  const body = document.querySelector("body");
  body.append(list);
};
