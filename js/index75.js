
let number = 1;
let startNumber = 0;
let secondNumber = 1;

while ( number <= 10 ) {     
    const sum = startNumber + secondNumber;    
    startNumber = secondNumber;
    secondNumber = sum;
    console.log(sum);
    number++;
}



