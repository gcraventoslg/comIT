
const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
};

const shouldOpenBatCave = function (user) {
    return (user.username === 'batman' && user.password === 'Alfred1960KPO!') ? true : false;
}

console.log(shouldOpenBatCave(user) ? 'Welcome back batman!!' : 'Sorry, you can\'t enter the Batcave, try again..');