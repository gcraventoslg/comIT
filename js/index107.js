
const isANumber= function(number){
    return (typeof number === 'number') ? true : false;
}

const createMessage = function(number1, number2, firstBigger ){
    const orderArray = ['first', 'second', 'equals']
    const message = (firstBigger) ? buildMessage(orderArray[0],orderArray[1], number1 , number2) : buildMessage(orderArray[1],orderArray[0], number1 , number2);    
    return message;
}

const buildMessage = function(first, second, number1, number2 ){
    return `The ${first} number ${number1} is bigger than the ${second} number ${number2}`;
}

const biggerNumber = function(firstNumber , secondNumber ){

    let message = '';

    if (isANumber(firstNumber) && isANumber(secondNumber)) {
        if (firstNumber > secondNumber) {
            message = createMessage(firstNumber, secondNumber, true);
        } else if (secondNumber > firstNumber) {
            message = createMessage(secondNumber, firstNumber, false);
        } else {
            message = `The first number ${firstNumber} and the second number ${firstNumber} are equals`;
        }

    }else{
        message = 'Error: Both numbers needs to be numbers ';
    }

    console.log(message);   
}

biggerNumber(6,3);
biggerNumber(2,8);
biggerNumber('l',2);



