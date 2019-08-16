

const ingredients = ['Pork', 'Pomato', 'Chicken', 'Lettuce', 'Beef', 'Carrots','Cucumber'];

let vegetarian  =  [];
vegetarian[0] = ingredients[3];
vegetarian[1] = ingredients[5];
vegetarian[2] = ingredients[6];

console.log('Ingredients');
for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);    
}

console.log('=====//=========');

console.log('Vegetarian');
for (let i = 0; i < vegetarian.length; i++) {
    console.log(vegetarian[i]);    
}
