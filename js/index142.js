


const firstPerson  = ['Gloria', 'Raventos', '711 Sterling Lyon Prkwy', 29];
//const firstOtherPerson  = ['Gloria', 'Raventos', '711 Sterling Lyon Prkwy', 29];
const secondPerson = ['Gloria', 'Raventos', '711 Sterling Lyon Prkwy', 29];
//const secondPerson = ['Alexander', 'Raventos', 'Calle A #213', 38];
const stringPerson = (accumulator, currentValue) => accumulator + currentValue;
const convertString = (arraytemp => arraytemp.reduce(stringPerson));
console.log(convertString(firstPerson) === convertString(secondPerson) ? `are the same persons` : ' are diferent persons');
