propertiesNames = ["name", "price", "sold", "console"];

/**Import module with Node */
games = require("./games");

games.forEach(game => {
  console.log(
    `Name: ${game[propertiesNames[0]]}, Price: ${
      game[propertiesNames[1]]
    }, Sold: ${game[propertiesNames[2]]}, Console: ${game[propertiesNames[3]]}`
  );
});
