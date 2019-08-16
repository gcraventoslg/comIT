
const average = function(numbers){  
    const sum = numbers.reduce((total, amount) => total + amount); 
    return sum/numbers.length;    
}
const numbersArray = [ 2, 4, 10, 20, 30];
console.log(`The average is ${average(numbersArray)}`);

