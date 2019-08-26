/**Import module with Node */
games = require("./games");

const newGamesArray = games.map(game => {
  /**Spread Operator */
  game.showDetail = () => {
    console.log(
      `Name: ${game.name} \nPrice: ${game.price}\nSold: ${game.sold}\nConsole: ${game.console}`
    );
  };

  return game;
});

newGamesArray.forEach((game, index) => {
  console.log(`=== / Game ${index} / ===`);
  game.showDetail();
});
