/**Import module with Node */
games = require("./games");

games.forEach((game, index) => {
  console.log(`======// ${index + 1} //====`);
  console.log("name:", game.name);
  console.log("price:", game.price);
  console.log("sold:", game.sold);
  console.log("console:", game.console);
});
