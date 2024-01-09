
//function that waits for the DOM to be ready - JS code wll not run before HTML is loaded 

$(document).ready(function() {
//display current day
$("#currentDay").text(dayjs().format("dddd, D MMMM YYYY"));
});