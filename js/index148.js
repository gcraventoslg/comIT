
const superhero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70
};

const showSuperHero = function (superhero) {
    const getProperties = Object.keys(superhero);
    getProperties.forEach(property => {
        console.log(`${property} - ${superhero[property]}`);
    })
}

showSuperHero(superhero);

console.log('Speed', superhero.speed);

let propertyName = 'speed';
superhero[propertyName] = 80;

console.log('Speed', superhero.speed);

