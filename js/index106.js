
function getUserID(){
    return 50;
}

function isUserValid(){
    let getUserId = getUserID();
    if ( getUserId > 30 ) {
        return true;
    }else{
        return false;
    }
}

if (isUserValid()) {
    console.log('User valid');
} else {
    console.log('User not valid');
}



