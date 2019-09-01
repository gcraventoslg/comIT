window.onload = function() {
  let parcialSum = 0;
  let paragraph = document.querySelector("#showParcialResult");
  let contNumber = 0;

  const askMoreNumber = function() {
    const wantInputNumber = confirm(
      "This program adds all the numbers you input"
    );
    return wantInputNumber;
  };

  const showPArcialResult = function() {
    if (!askMoreNumber()) {
      const avearge = parcialSum / contNumber;
      console.log(`The result so far is: ${parcialSum}}`);
      let showResult = "";
      showResult += `----------------------------------------- <br>`;
      showResult += `The final result is: ${parcialSum} <br>`;
      showResult += `The user input ${contNumber} numbers<br>`;
      showResult += `The average is: ${avearge}`;
      paragraph.innerHTML += showResult;
    } else {
      contNumber++;
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
