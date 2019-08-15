
let startNumber = 0;
let secondNumber = 1;

for (let i = 1; i <= 10; i++) {
    
    sum = startNumber + secondNumber;
    startNumber = secondNumber;
    secondNumber = sum;        
    
    console.log(sum);    
}
