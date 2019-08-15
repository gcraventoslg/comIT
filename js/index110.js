const average = function(numbers){  
    const sum = numbers.reduce((total, amount) => total + amount); 
    const average = sum/numbers.length;
    return average;
}

const numbersArray = [ 2, 4, 10, 20, 30];
const averageResult = average(numbersArray);

console.log(`The average is ${averageResult}`);

