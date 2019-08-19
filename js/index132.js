

const mutants  = ['Professor X', 'Cyclops','Iceman', 'Angel', 'Beast', 'Phoenix','Logan'];

console.log('==Solution 1==');

const mutantsName = mutants.filter(function(mutant) {
    return (mutant === 'Professor X' || mutant === 'Logan');
});

const mutantName = mutants.filter(function(mutant) {
    return (mutant === 'Gambit');
});

if (mutantsName.length === 2) {
    console.log('We love X-Men');
}

if (mutantName.length === 0) {
    console.log('X-Men sucks');
}

console.log('==Solution 2==');
/**
 * This show message depending on x-men names
 * 
 * @return {string} Message if like mutatn
 */
function findMutant() {
    if (mutants.includes("Professor X") && mutants.includes("Logan")) {
        console.log("We love X-Men")
    } 
    if (!mutants.includes("Gambit")) {
        console.log("X-Men sucks")
    }
}

findMutant()


