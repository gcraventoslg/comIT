
const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
};

const shouldOpenBatCave = function (username, password) {
    return (username === 'batman' && password === 'Alfred1960KPO!') ? true : false;
}

console.log(shouldOpenBatCave(user.username, user.password) ? 'Welcome back batman!!' : 'Sorry, you can\'t enter the Batcave, try again..');