// Strict mode provides assurance against global variables
"use strict";

//Create a function that contains all the variables
function clock() {
  //Declare a new time variable for time, hour, min, and seconds
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let min = fullDate.getMinutes();
  let sec = fullDate.getSeconds();

  //Add '0' infront of hours
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  //Apply 2 methods to target hour id HTML element
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":" + min;
  document.getElementById("second").innerHTML = ":" + sec;
}

//Set Interval Function

setInterval(clock, 1000);
