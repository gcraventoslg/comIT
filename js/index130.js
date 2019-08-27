const mutants = [
  "Professor X",
  "Cyclops",
  "Iceman",
  "Angel",
  "Beast",
  "Phoenix"
];
const mutantsSorts = mutants.sort();

const newMutants = [...mutants];
const mutantsReverse = newMutants.reverse();

console.log("Original mutants list:", mutants);
console.log("Sorted mutants list:", mutantsSorts);
console.log("Reversed mutants list:", mutantsReverse);
console.log("Mutants name separated by * :", mutantsReverse.join(" * "));
