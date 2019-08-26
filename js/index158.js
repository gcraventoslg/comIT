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

const budgetResult = newGamesArray
  .filter(game => game.console === consoleTypeToFilter)
  .reduce((budget, game) => {
    return budget + game.price;
  });

console.log(budgetResult);
/** Seria para todos los juegos o solo para los PS4 */
/*Show the gameNames items as output
Show the gamePrices items as output*/
