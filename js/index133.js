

const mutants  = ['Professor X', 'Cyclops','Iceman', 'Angel','Magneto', 'Beast', 'Phoenix','Logan','Gambit'];

mutants.forEach(mutant => {
    (mutant !== 'Magneto') ? console.log(mutant) :  deleteMagneto() ;    
});

function deleteMagneto() {        
    mutants.splice(mutants.indexOf('Magneto'), 1 ); ;    
    console.log(mutants);
 }

