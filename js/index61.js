
let weekdayNumber = 5;

let message = null;

switch (weekdayNumber) {
    case 1:
        message = ' Today it\'s Monday';
        break;
    case 2:
        message = 'Today it\'s Tuesday';
        break;
    case 3:
        message = 'Today it\'s Wednesday';
        break;
    case 4:
        message = 'Today it\'s Thursday';
        break;
    case 5:
        message = 'Today it\'s Friday';
        break;
    case 6:
        message = 'Today it\'s Saturday';
        break;
    case 7:
        message = 'Today it\'s Sunday';
        break;
    default:
        message = 'Error: Please input a number bettwen 1 and 7';
}

console.log('Using switch');
console.log('Week Day Number:', weekdayNumber);
console.log(message);

weekdayNumber = 3;

if ( weekdayNumber === 1 ) {
    message = ' Today it\'s Monday';
} else if ( weekdayNumber === 2 ){
    message = 'Today it\'s Tuesday';
} else if ( weekdayNumber === 3 ){
    message = 'Today it\'s Wednesday';
} else if ( weekdayNumber === 4 ){
    message = 'Today it\'s Thursday';
} else if ( weekdayNumber === 5 ){
    message = 'Today it\'s Friday';
}else if ( weekdayNumber === 6 ){
    message = 'Today it\'s Saturday';
} else if ( weekdayNumber === 7 ){
    message = 'Today it\'s Sunday';
} else {
    message = 'Error: Please input a number bettwen 1 and 7';
}

console.log('Using if/else/if');
console.log('Week Day Number:', weekdayNumber);
console.log(message);







