

const mutants  = ['Professor X', 'Cyclops','Iceman', 'Angel','Magneto', 'Beast', 'Phoenix','Logan','Gambit'];

const mutantsFiltered = mutants.filter(mutant => mutant !== 'Magneto' && mutant !== 'Iceman' && mutant !== 'Gambit' );

console.log(mutantsFiltered);
