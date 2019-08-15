
let number = 13;

while ( number >= 0 ) { 
    
    let cont = 0;
    output = '';

    while ( cont <= number ){        
        output +='*';
        cont++;        
    }   
     
    console.log(output);  
    number--;
}



