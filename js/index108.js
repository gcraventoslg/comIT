
const sortFunction  = function(number1 , number2, number3, highToLow  ){

    const numbersArray = [ number1, number2, number3 ];   

    for (let i = 0; i < numbersArray.length; i++) {                   
        if(numbersArray[i] > numbersArray[i+1] ){
            const tempHigher = numbersArray[i];
            numbersArray[i] = numbersArray[i+1];
            numbersArray[i+1] = tempHigher;
        }         
    }
    
    return (highToLow) ? numbersArray.reverse().join(',') : numbersArray.join(',');    
    
}
console.log(sortFunction(10,8,25, false));




