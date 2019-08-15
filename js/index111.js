
const evenNumber = function(number){  
    if (number % 2 === 0) {
        return true;
    }else{
        return false;
    }    
}

const ifEvenNumber =  function(number){
    if (evenNumber(number)) {
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}

ifEvenNumber(2);
ifEvenNumber(5);
ifEvenNumber(3);
ifEvenNumber(24);
ifEvenNumber(12);

