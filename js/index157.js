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
const filterByConsoleType = newGamesArray.filter(game => {
  return game.console === consoleTypeToFilter;
});

filterByConsoleType.forEach((game, index) => {
  console.log(`===// Game ${index + 1} //===`);
  game.showDetail();
});
