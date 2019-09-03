window.onload = function() {
  const titleElement = document.querySelector("h1");
  const divElement = document.querySelector("div");

  const strikedClass = function(element) {
    console.log(element);
    element.hasAttributes()
      ? element.classList.add("bold")
      : element.classList.add("striked");
  };

  strikedClass(titleElement);
  console.log(titleElement);

  strikedClass(divElement);
  console.log(divElement);
};
