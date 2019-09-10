window.onload = function() {
  const form = document.querySelector("form");
  const div = document.querySelector("div");
  const submit = document.querySelector("input[type='submit']");

  submit.addEventListener("click", function() {
    form.onsubmit = () => {
      event.preventDefault();
      const username = document.querySelector("input[name='username']");
      const pass = document.querySelector("input[name='pass']");

      if (username.value && pass.value) {
        div.classList.remove("error");
        div.innerHTML = "";
      } else {
        const span = document.createElement("span");
        span.innerHTML = "Please input a username and password";
        div.classList.add("error");
        div.append(span);
      }
    };
  });
};
