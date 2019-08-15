
let number = 0;
let sumResult = 0;

while ( number < 1001 ) {
    
    if ( number % 2 !== 0 ) {
        sumResult += number;    
    }
    
    number++;
}

console.log('Partial result:',sumResult);
