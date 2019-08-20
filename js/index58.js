
const hour = 20;
let message = '';

if ( hour >= 5 && hour < 12 ) {
    message = 'Good morning';
} else if ( hour >= 12 && hour < 18 ) {
    message = 'Good Afternoon';
} else if ( hour >= 18 && hour < 22 ) {
    message = 'Good evening';
} else if ( (hour >= 22 && hour <=24) && ( hour >= 1 && hour < 5) ) {
    message = 'Good Night';
} else {
    message = 'Enter a time between 1 and 24';
}

console.log(message);