
let sumResult = 0;

for (let i = 0; i < 1001; i++) {
    if ( i % 2 !== 0 ) {
        sumResult += i;    
    }
    
}

console.log('Partial result:',sumResult);
