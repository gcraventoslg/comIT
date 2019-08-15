function getHexaColor  (color) {
    output = '';
    switch (color) {
        case 'white':
            output = '#FFFFFF';
            break;
        case 'black':
            output = '#000000';
            break;
        case 'blue':
            output = '#0b24fb';
            break;
        case 'green':
            output = '#0e7e12';
            break;
        case 'yellow':
            output = '#fffd38';
            break;
        case 'pink':
            output = '#fec1cc';
            break;
        default:
        output= 'This color is not defined';
    }

    return output;
}
console.log(getHexaColor('white'));
console.log(getHexaColor('black'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('green'));
console.log(getHexaColor('yellow'));
console.log(getHexaColor('pink'));


