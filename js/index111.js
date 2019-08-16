const ifEvenNumber =  function(number){
    const message = (number % 2 === 0) ? `${number} is even` : `${number} is odd` ; 
    return message;
}

console.log(ifEvenNumber(2));
console.log(ifEvenNumber(5));
console.log(ifEvenNumber(3));
console.log(ifEvenNumber(24));
console.log(ifEvenNumber(12));
console.log(ifEvenNumber(25));

