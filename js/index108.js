


const sortFunction  = function(number1 , number2, number3, highToLow  ){

    let message = '';
    const numbersArray = [ number1, number2, number3 ];   

    for (let i = 0; i < numbersArray.length; i++) {       
            
            if(numbersArray[i] > numbersArray[i+1] ){
                const tempHigher = numbersArray[i];
                numbersArray[i] = numbersArray[i+1];
                numbersArray[i+1] = tempHigher;
            }         
    }
    
    if (highToLow) {
         message = highToLowA(numbersArray);
    } else {
        for (let j = 0; j < numbersArray.length; j++) {        
            message += numbersArray[j];        
            if ( numbersArray.length-1 === j) {
                message +='.';
            }else{
                message +=', ';
            }            
        }
    }  

    console.log(message);
   
}

function highToLowA (numbersArray) {
    let message = '';
    for (let i = numbersArray.length-1; i >= 0; i--) {
        message += numbersArray[i];        
        if ( 0 === i) {
            message +='.';
        }else{
            message +=', ';
        }
        
    }
    return message;
}



sortFunction(10,8,25, true);




