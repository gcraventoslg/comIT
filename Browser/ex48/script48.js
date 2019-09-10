window.onload = function() {
  const form = document.querySelector("form");
  const formElements = form.elements;
  const button = formElements[2];

  for (let i = 0; i < formElements.length; i++) {
    if (
      formElements[i].type === "text" ||
      formElements[i].type === "password"
    ) {
      formElements[i].onfocus = function() {
        form.classList.add("sendBox");
      };
      formElements[i].onblur = function() {
        form.classList.remove("sendBox");
      };
    }
  }

  button.addEventListener("click", function() {
    form.onsubmit = () => {
      event.preventDefault();
      inputUsername = form.elements[0].value;
      inputPassword = form.elements[1].value;
      alert(`Username: ${inputUsername} and Password: ${inputPassword}`);
    };
  });
};
