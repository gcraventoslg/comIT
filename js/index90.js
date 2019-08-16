
let sumResult = 0;
let numbers = [];

for (let i = 0; i < 1001; i++) {
    if ( i % 2 !== 0 ) {
        sumResult += i;
        console.log('Partial result:',sumResult);    
    }
    numbers.push(i);    
}

/**Using filter and reduce combine */

const evenNumber = numbers.filter(number => number % 2 !== 0)
    .reduce((accumulator, currentValue) => {
        const result = accumulator + currentValue;
        console.log('Partial result:',result);    
        return result;
    });

const evenNumberTwo = numbers.filter((number) => {
        return number % 2 !== 0;
    }).reduce((sumParcial, number) => {
        const result = sumParcial + number;
        console.log('Partial result:',result);
        return result;
    });

    /*const arrayOddNumbers = numbers.filter(number => number % 2 !== 0)
    console.log(arrayOddNumbers);*/

    
