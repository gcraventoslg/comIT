
let number = 13;

do {
    let cont = 0;
    output = '';

    do {
        output +='*';
        cont++;
    } while ( cont <= number )
     
    console.log(output);  
    number--;
} while ( number >= 0 ) 



