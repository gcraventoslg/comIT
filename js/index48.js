const message = '3.14 it\'s a great number but 42 it\'s the answer to life';
const pi = parseFloat(message.slice(0,4));
const answerToLife = parseInt(message.slice(29,31));
const result = pi + answerToLife;

console.log('pi :', pi);
console.log('the answer to life :', answerToLife);
console.log('Result :', result);

resultTransfor = result.toString();

console.log( resultTransfor.concat(' is the result of adding pi and answerToLife'));








