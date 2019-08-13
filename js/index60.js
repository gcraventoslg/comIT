
const grade = 5;
let message = '';

if ( grade >= 9 ) {
    message = 'Great work!!';
} else if ( grade < 9 && grade >= 6  ) {
    message = ' You\'ve done it!';
} else {
    message = 'You need to do all the exercises again, please try again!';
}

console.log(message);