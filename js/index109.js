const validateUser = function(username , password){
    return ((username === 'nacho' && password === 'Nerd1979')||
    (username === 'pedro' && password === 'Batman0217')||
    (username === 'marta' && password === 'Mother2312')) ? true : false;
}

const username = 'pedro';
const password = 'Batman0217';
const message = (validateUser(username, password)) ? `Welcome ${username.toUpperCase()}, nice to see you again` : 'Please input valid credentials';
console.log(message);
