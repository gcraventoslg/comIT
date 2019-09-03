window.onload = function() {
  const firtLinkElement = document.querySelector("a");

  const addClass = function() {
    const hasAttr = firtLinkElement.hasAttribute("class");
    if (hasAttr) {
      firtLinkElement.classList.add("blue");
    } else {
      firtLinkElement.classList.add("red");
      firtLinkElement.classList.add("menu");
    }
  };

  addClass();
};
