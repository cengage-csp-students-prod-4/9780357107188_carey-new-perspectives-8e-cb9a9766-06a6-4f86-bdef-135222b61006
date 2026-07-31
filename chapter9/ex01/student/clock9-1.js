"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 1

   Clock
   Author: Artasia Bates
   Date: 07/30/2026

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/


function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}
runClock();
setInterval(runClock, 1000);
function runClock() {

   let thisDay = new Date();

   let thisDate = thisDay.toLocaleDateString();

   let thisDayNum = thisDay.getDay();
   
   let thisWeekday = getWeekday(thisDayNum);

   let thisTime = thisDay.toLocaleTimeString();

   document.getElementById("date").textContent = thisDate;
   document.getElementById("wday").textContent = thisWeekday;
   document.getElementById("time").textContent = thisTime;
}