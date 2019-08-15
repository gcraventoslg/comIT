const showName = function(){
    
    const textShow = '= Gloria =';
    const equals = createEquals(textShow.length);

    console.log(equals);
    console.log(textShow);
    console.log(equals);
};

function createEquals(cont) {
    let equals = '';
    for (let i = 0; i < cont; i++) {
        equals += '=';        
    }
    return equals;
}

showName();
showName();