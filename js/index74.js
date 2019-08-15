
let number = 1;
let contSymbol = 1;

while ( number <= 7 ) { 
    let cont = 1;
    let output = '';
    while ( cont <= contSymbol ){        
        output +='*';
        cont++;        
    } 
    contSymbol +=2;     
    console.log( output);  
    number++;
}



