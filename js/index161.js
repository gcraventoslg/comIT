/**Import module with Node */
userTwitter = require("./userTwitter");

const getProperties = Object.keys(userTwitter);

getProperties.forEach(property => {
  console.log(`${property.toUpperCase()}`);
});
