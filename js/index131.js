

const femaleStudents = ['Brenda','Elisa','Diana','Danica','Shriya'];
const maleStudents = ['Hugo','Vruttik','Kushagra','Yuriy','Thomas'];
const students = femaleStudents.concat(maleStudents).sort();

console.log('===using numeric indexes===');
console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

console.log('===using while===');

let cont =0 ;
let showMaleNames = '';
while (cont < maleStudents.length) {
    showMaleNames += `${maleStudents[cont]} \n`;
    cont++;
}
console.log(showMaleNames);

console.log('===using for===');

let showStudentsNames = '';
for (let i = 0; i < students.length; i++) {
    showStudentsNames += `${students[i]} \n`;    
}
console.log(showStudentsNames);






