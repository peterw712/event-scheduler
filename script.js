//display current date and time
document.getElementById("currentDay").textContent = moment().format("MMMM Do YYYY, h:mm a");

//basic time comparison
var currentDate = moment().format("YYYY-MM-DD");
var currentDateandTime = moment().format("YYYY-MM-DD HH:mm")

console.log(moment(currentDate + ' 09:00').isBefore(moment(currentDateandTime)));
console.log(moment(currentDate + ' 17:00').isBefore(moment(currentDateandTime)));


