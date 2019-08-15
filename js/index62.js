
const monthNumber = 5;
let monthName = null;
let monthDays = null;


let message = null;

switch (monthNumber) {
    case 1:
        monthName = 'January';
        monthDays = '31 days';
        break;
    case 2:
        monthName = 'February';
        monthDays = '28 days in a common year and 29 days in leap years';
        break;
    case 3:
        monthName = 'March';
        monthDays = '31 days';
        break;
    case 4:
        monthName = 'April';
        monthDays = '30 days';
        break;
    case 5:
        monthName = 'May';
        monthDays = '31 days';
        break;
    case 6:
        monthName = 'June';
        monthDays = '30 days';
        break;
    case 7:
        monthName = 'July';
        monthDays = '31 days';
        break;
    case 8:
        monthName = 'August';
        monthDays = '31 days';
        break;
    case 9:
        monthName = 'September';
        monthDays = '30 days';
        break;
    case 10:
        monthName = 'October';
        monthDays = '31 days';
        break;
    case 11:
        monthName = 'November';
        monthDays = '30 days';
        break;
    case 12:
        monthName = 'December';
        monthDays = '31 days';
        break;    
    default:
        message = 'Error: Please input a number bettwen 1 and 12';
}

if (!monthName && !monthDays ) {
    console.log(message);
} else {
    console.log(`${monthName} is the selected month and has ${monthDays}`);
}









