
const biggerNumber = function(firstNumber , secondNumber ){

    let message = '';

    if ((typeof firstNumber ===  'number') && (typeof secondNumber ===  'number') ) {
        if (firstNumber > secondNumber) {
            message = `The first number ${firstNumber} is bigger than the second number ${secondNumber}`;
        } else if (secondNumber > firstNumber) {
            message = `The second number ${secondNumber} is bigger than the first number ${firstNumber}`;
        } else {
            message = `The first number ${firstNumber} and the second number ${firstNumber} are equals`;
        }
    }else{
        message = 'Error: Both numbers needs to be numbers ';
    }

    console.log(message);
   
}

biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber('l',2);



