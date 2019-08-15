    let evenCont = 0;
    for (let i = 0; i < 1000; i++){
        
        if (i % 2 === 0) {
            evenCont++;
            console.log(i);
        }

        if (evenCont === 20) {
            break; 
        }

    }