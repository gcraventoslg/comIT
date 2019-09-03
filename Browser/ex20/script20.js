window.onload = function() {
  const listElement = document.querySelector("ul");
  const listChildren = listElement.children;

  console.log(listChildren);

  const secondChild = listChildren[1];
  secondChild.classList.add("green");

  const fourthChild = listChildren[3];
  fourthChild.classList.add("red");

  const getParent = secondChild.parentElement;
  getParent.classList.add("orange");
  console.log(getParent);
};
