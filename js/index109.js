const validateUser = function(username , password){  

    if ((username === 'nacho' && password === 'Nerd1979')||
        (username === 'pedro' && password === 'Batman0217')||
        (username === 'marta' && password === 'Mother2312')) {
        return true;         
    } else{
        return false;
    }   

}

const username = 'pedro';
const password = 'Batman0217';

if (validateUser(username, password)) {
    console.log(`Welcome ${username.toUpperCase()}, nice to see you again`);
}else{
    console.log('Please input valid credentials');
}