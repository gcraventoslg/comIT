function revert   (word) {
    let revertWord = '';
    for (let i = word.length-1; i >= 0; i--) {
       revertWord += word[i];        
    }    
    return revertWord;
}
console.log(revert('gloria'));
console.log(revert('Welcome'));
console.log(revert('LIFE'));
console.log(revert('REINIER'));

