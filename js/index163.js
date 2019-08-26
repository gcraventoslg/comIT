const addFunction = function() {
  const properties = Object.keys(arguments);
  let totalAdd = 0;
  properties.forEach(property => {
    totalAdd += arguments[property];
  });
  return totalAdd;
};

console.log(addFunction(158, 25, 32, 5, 56));
console.log(addFunction(158, 25, 32, 5, 56, 854, 12, 23, 54, 22));
