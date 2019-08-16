
const mutants  = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];
let mutantsOriginalList = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];
const mutantsSorts = mutants.sort();
const mutantsReverse = mutantsOriginalList.reverse();

console.log('Original mutants list:', mutantsOriginalList);
console.log('Sorted mutants list:', mutantsSorts);
console.log('Reversed mutants list:', mutantsReverse);
console.log('Mutants name separated by * :',mutantsReverse.join(' * '));


