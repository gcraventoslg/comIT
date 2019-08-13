const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian city, Go Winnipeg!';

const first = playerName.slice(0,15);
const second = `${teams.charAt(46).toUpperCase()}${teams.slice(47,50)}`;
const fourth = message.slice(12,20);
const fiveth = message.slice(34,38);

const result = `${first} ${second} ${fourth} ${fiveth}`;
console.log(result);

/*'PATRIK LAINE is the best Jets player, Go Jets!!';*/
console.log(`${first.slice(0,12).toUpperCase()} ${first.slice(13)} ${fourth} ${second} player${fiveth} ${second}!!`);







