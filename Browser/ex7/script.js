window.onload = function() {
  let parcialSum = 0;
  let paragraph = document.querySelector("#showParcialResult");

  const askMoreNumber = function() {
    const wantInputNumber = confirm(
      "This program adds all the numbers you input"
    );
    return wantInputNumber;
  };

  const showPArcialResult = function() {
    if (!askMoreNumber()) {
      console.log(`The result so far is: ${parcialSum}}`);
    } else {
      const number = prompt("Input a number");
      number ? (parcialSum += parseInt(number)) : (parcialSum += 0);
      console.log(`The result so far is: ${parcialSum}`);
      createText(number, parcialSum);
      showPArcialResult();
    }
  };

  const createText = function(number, result) {
    const text = `Number = ${number} - Parcial Result = ${result} <br>`;
    paragraph.innerHTML += text;
  };

  showPArcialResult();
};
