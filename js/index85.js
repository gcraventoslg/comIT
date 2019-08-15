
let number = 1;
let startNumber = 0;
let secondNumber = 1;

do {
    const sum = startNumber + secondNumber;    
    startNumber = secondNumber;
    secondNumber = sum;
    console.log(sum);
    number++;
} while ( number <= 10 ) 



