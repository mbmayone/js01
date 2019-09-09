//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

// create new date
var todaysDate= new Date();

// makes an array of days of the week
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// finds day in days array
var day = days[ todaysDate.getDay() ];

// from stackoverflow.com - changes time to am or pm
function formatToAmPm(todaysDate) {
  // gets hours
  var hours = todaysDate.getHours();
  // gets minutes
  var minutes = todaysDate.getMinutes();
  // gets seconds
  var seconds = todaysDate.getSeconds();
  // if hours are greater than or equal to 12 than it says pm, if not am
  var ampm = hours >= 12 ? 'PM' : 'AM';
  // divides hours by 12 and will give remainder so that no hour is greater than 12
  hours = hours % 12;
   // the hour 0 should be 12
  hours = hours ? hours : 12;
  // adds 0 if minutes are less than 10
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  // adds 0 if seconds are less than 10
  seconds = seconds < 10 ? '0'+ seconds : seconds;
  // sets strTime equal to time
  var strTime = hours + ':' + minutes + ':' + seconds + " " + ampm;
  return strTime;
}

// sets answer1
document.getElementById('answer1').innerHTML = "Today is " + day + ".<br>" + "Current Time : " + formatToAmPm(todaysDate);

// formats month to correct number
function formatMonth(todaysDate) {
  // corrects month number
  var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var month = months[todaysDate.getMonth()];
  // adds 0 if month is less than 10
  month = month < 10 ? '0'+ month : month;
  return month;
}

// formats date number
function formatDateNumber(todaysDate) {
  var dateNumber = todaysDate.getDate();
  // adds 0 if date is less than 10
  dateNumber = dateNumber < 10 ? '0'+ dateNumber : dateNumber;
  return dateNumber;
}

//gets year with all numbers
var year = todaysDate.getFullYear();

//sets answer 2
document.getElementById('answer2').innerHTML = formatMonth(todaysDate) + "-" + formatDateNumber(todaysDate) + "-" + year + "<br>" + formatMonth(todaysDate) + "/" + formatDateNumber(todaysDate) + "/" + year + "<br>" + formatDateNumber(todaysDate) + "/" + formatMonth(todaysDate) + "/" + year;;

//code from textbook
(function() {
  'use strict'
  paper.install( window);
  paper.setup( document.getElementById('mainCanvas'));
  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';
  tool.onMouseDown = function(event) {
    var c = Shape.Circle( event.point, 20);
    c.fillColor = 'green';
  };
  paper.view.draw();
}())
