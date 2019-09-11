window.onload = function() {
  const form = document.querySelector("form");
  const submit = document.querySelector('input[name="submit"]');

  submit.addEventListener("click", function() {
    form.onsubmit = function(event) {
      event.preventDefault();
      const superHerosSelected = [];
      //change using this selector
      const checkbox = document.querySelectorAll("input[type='checkbox']");
      console.log(checkbox);
      const superheroes = form.elements["superheroe[]"];
      for (let i = 0; i < superheroes.length; i++) {
        if (superheroes[i].checked) {
          superHerosSelected.push(superheroes[i].value);
        }
      }
      if (superHerosSelected.length === 0) {
        alert("Please at least select a superheroe");
      } else {
        if (superHerosSelected.length === 1) {
          alert(`The best superheroe is: ${superHerosSelected[0]}`);
        } else {
          let superHeroNames = "";
          superHerosSelected.forEach(hero => {
            superHeroNames += `${hero} \n`;
          });
          alert(`The best superheores are:\n${superHeroNames}`);
        }
      }
    };
  });
};
