
let number = 1;
let contSymbol = 1;

do {
    let cont = 1;
    let output = '';
    
    do {
        output +='*';
        cont++;
    }while ( cont <= contSymbol )

    contSymbol +=2;     
    console.log( output);  
    number++;
} while ( number <= 7 )



