
const hour = 20;
let message = '';

if ( hour >= 5 && hour < 12 ) {
    message = 'Good morning';
} else if ( hour >= 12 && hour < 18 ) {
    message = 'Good Afternoon';
} else if ( hour >= 18 && hour < 22 ) {
    message = 'Good evening';
} else {
    message = 'Good Night';
}

console.log(message);