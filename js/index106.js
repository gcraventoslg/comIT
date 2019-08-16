
function getUserID(){
    return 50;
}

function isUserValid(){
    let getUserId = getUserID();
    return (getUserId > 30) ? true : false; 
}

(isUserValid()) ? console.log('User valid') : console.log('User not valid');




