
const firstNumber = 20;
const secondNumber = 18;
let message = '';

if ( firstNumber === secondNumber ) {
    message = 'They are the same number';
} else if ( firstNumber > secondNumber ) {
    message = `The first number (${firstNumber}) is bigger than second Number ${secondNumber} `;
} else {
    message = `The second number (${secondNumber}) is bigger than first Number ${firstNumber} `;
}

console.log(message);