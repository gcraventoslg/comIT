


const tripExpenses = [52, 102, 73.87];
const calcBudget = (accumulator, currentValue) => accumulator + currentValue;
const budget  = tripExpenses.reduce( calcBudget );

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);
