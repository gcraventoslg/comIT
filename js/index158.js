/**Import module with Node */
games = require("./games");
/**Spread Operator */
const newGamesArray = games.map(game => {
  return {
    ...game,
    showDetail: () => {
      console.log(
        `Name: ${game.name} \nPrice: ${game.price}\nSold: ${game.sold}\nConsole: ${game.console}`
      );
    }
  };
});

const consoleTypeToFilter = "PS4";

const ps4GamesArray = newGamesArray.filter(
  game => game.console === consoleTypeToFilter
);

const budgetResult = ps4GamesArray.reduce((accumulator, game) => {
  return { price: accumulator.price + game.price };
});

console.log(
  `I need ${budgetResult.price} CAD to get all this PS$ great games!!`
);

let gameNames = [];
let gamePrices = [];
const getNewArrays = function(game) {
  gameNames.push(game.name);
  gamePrices.push(game.price);
};

ps4GamesArray.forEach(getNewArrays);

const showArrayValues = function(arrayValue) {
  arrayValue.forEach(value => {
    console.log(value);
  });
};

showArrayValues(gameNames);
showArrayValues(gamePrices);
