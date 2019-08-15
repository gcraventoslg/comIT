



for (let i = 1; i <= 14; i++) {
    let output = '';
    if (i % 2 !== 0) {
        for (let j = 0; j < i; j++) {
            output +='*';            
        }
        console.log( output);
    }  
}

 console.log('======//====OR====//=====');

 let contSymbol = 1;
 for (let i = 1; i <= 7; i++) {

    let output = '';

    for (let j = 0; j < contSymbol ; j++) {
        output +='*';            
    }

    contSymbol+=2;

    console.log( output);    
}