window.onload = function() {
  const form = document.querySelector("form");
  const div = document.querySelector("div");
  const submit = document.querySelector("input[type='submit']");
  // we check if the username value (string) has alphabumeric characters only
  const regex = /^[a-z0-9]+$/i;
  // this is a simple email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  submit.addEventListener("click", function() {
    form.onsubmit = () => {
      event.preventDefault();
      div.innerHTML = "";
      const username = document.querySelector("input[name='username']");
      const pass = document.querySelector("input[name='pass']");
      const email = document.querySelector("input[name='email']");
      div.innerHTML = "";
      if (username.value && pass.value && email.value) {
        div.classList.remove("error");
        div.innerHTML = "";
      } else {
        if (username.value || pass.value || email.value) {
          const span = document.createElement("p");
          span.innerHTML = "username, password, and email are required";
          div.classList.add("error");
          div.append(span);
        }
      }
      if (
        !regex.test(username.value) ||
        !regex.test(pass.value) ||
        !emailRegex.test(email.value)
      ) {
        console.log("entro");
        const paragraph = document.createElement("p");
        paragraph.innerHTML =
          "username, password, or email are not valid valid";
        div.classList.add("error");
        div.append(paragraph);
      }

      console.log(div);
    };
  });
};
