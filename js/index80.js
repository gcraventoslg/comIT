
let number = 0;
let sumResult = 0;

do {
    if ( number % 2 !== 0 ) {
        sumResult += number;    
    }
    
    number++;
} while ( number < 1001 ) 

console.log('Partial result:',sumResult);
