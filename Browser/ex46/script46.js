window.onload = function() {
  const form = document.querySelector("form");
  const inputSubmit = document.querySelector("input");
  const select = document.querySelector("select");
  let indexSelected = select.selectedIndex;
  let countrySelected = select.options[indexSelected].innerHTML;

  select.addEventListener("change", function(event) {
    indexSelected = event.target.selectedIndex;
    countrySelected = event.target.options[indexSelected].innerHTML;
  });

  const submitForm = () => {
    form.onsubmit = event => {
      event.preventDefault();
      alert(
        `${countrySelected} has been selected and it has ${indexSelected} as id`
      );
    };
  };
  inputSubmit.addEventListener("click", submitForm);
};
