

const students  = ['Hugo', 'Brenda', 'Elisa', 'Diana', 'Samuel'];

students[0] = 'Hugo';
students[1] = 'Brenda';
students[2] = 'Elisa';
students[3] = 'Diana';
students[4] = 'Samuel';
students[6] = 'Nico';

for (let i = 0; i < students.length; i++) {
    console.log(`index ${i}: ${students[i]}`);
    
}
