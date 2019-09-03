window.onload = function() {
  const listElement = document.querySelector("ul");
  const firstChild = listElement.children[0];

  firstChild.classList.add("orange");

  firstChild.nextElementSibling.classList.add("orange");
  listElement.children[1].nextElementSibling.classList.add("orange");
  listElement.children[2].nextElementSibling.classList.add("orange");
  listElement.children[3].nextElementSibling.classList.add("orange");

  listElement.children[3].previousElementSibling.classList.remove("orange");
  listElement.children[3].previousElementSibling.classList.add("red");

  listElement.children[1].previousElementSibling.classList.remove("orange");
  listElement.children[1].previousElementSibling.classList.add("green");

  console.log(listElement);
};
