
const text1  = 'Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator\'s fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award';

console.log('message text all in uppercase');
console.log('message text all in lowercase');

text1UpperCase = `${text1.slice(0,315).toUpperCase()} \n`;
text1LowerCase = `${text1.slice(315).toLowerCase()} \n`;
text1UpperAndLowerCase = `${text1UpperCase} ${text1UpperCase}`;

console.log(text1UpperCase.concat(text1LowerCase));
console.log(`The message has ${ text1UpperAndLowerCase.length } characters long`)









