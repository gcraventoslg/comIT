const mutants  = ['Professor X', 'Cyclops','Iceman', 'Angel','Magneto', 'Beast', 'Phoenix','Logan','Gambit'];
const mutantsFinded = [];

mutants.forEach(mutant=> {
   if (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix' )
        mutantsFinded.push(mutant);
   
});

const stringWithMutantsFinded = mutantsFinded.toString();
console.log(stringWithMutantsFinded);

