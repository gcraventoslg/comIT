
let number = 0;
let sumResult = 0;

while ( number < 1001 ) {
    console.log(`${sumResult} + ${number} = ${sumResult+number}`);    
    sumResult += number;
    number++;
}

console.log('Partial result:',sumResult);
