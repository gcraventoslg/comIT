const hour = 10;
let message = "";

if (hour >= 5 && hour < 12) {
  message = "Good morning";
} else if (hour >= 12 && hour < 18) {
  message = "Good Afternoon";
} else if (hour >= 18 && hour < 22) {
  message = "Good Evening";
} else if (hour >= 22 && hour <= 24 && (hour >= 1 && hour < 5)) {
  message = "Good Night";
} else {
  message = "Enter a time between 1 and 24";
}

console.log(message);

console.log("Other solution");

const rangeHour = [
  { startHour: 5, endHour: 11, sms: "Good Moirning" },
  { startHour: 12, endHour: 17, sms: "Good Afternoon" },
  { startHour: 18, endHour: 21, sms: "Good Evening" },
  { startHour: 22, endHour: 24, sms: "Good Night" },
  { startHour: 1, endHour: 4, sms: "Good Night" }
];

const showMessage = rangeHour.filter(function(range) {
  return hour >= range.startHour && hour < range.endHour;
});
console.log(
  showMessage.length > 0
    ? showMessage[0].sms
    : "Enter a valid value between 1 and 24"
);
