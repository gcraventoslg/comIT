const mutants  = ['Professor X', 'Cyclops','Iceman', 'Angel','Magneto', 'Beast', 'Phoenix','Logan','Gambit'];

const updatedMutantsArray = mutants.map(function(mutant){
    return (mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit' ) 
            ? '<3 '.concat(mutant) : mutant;
});

console.log(mutants);
console.log(updatedMutantsArray);



