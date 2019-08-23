
const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
};

const verifyLogin = function (user) {
    return (user.username === 'batman' && user.password === 'Alfred1960ROCKS!') ? 'Welcome back batman!!' : 'Sorry, you can\'t enter the Batcave, try again..';
}

console.log(verifyLogin(user));