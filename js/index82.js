
let number = 1;

do {
    let cont = 1;
    output = '';

    do{
        output +='*';
        cont++; 
    }while ( cont <= number ) 
     
    console.log(output);  
    number++;
} while ( number < 14 ) 



