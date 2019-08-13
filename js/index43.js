const text = 'game of thrones';

const firstChar = text.charAt(0);
const secondChar = text.charAt(5);
const thirdChar = text.charAt(8);

const result = firstChar.concat(secondChar, thirdChar);
const transforResult = result.toUpperCase();

console.log(`the final result is: ${transforResult}`);

console.log('======//========//=========/=======');
console.log('invalid index');
console.log(text.charAt(1000), ' Is showing something empty, a space');
console.log(typeof text.charAt(1000));






