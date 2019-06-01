console.log("This works");
//a variable holding the time allowed
var timeAllowed = 180000;
// a variable for the setInterval of 1 second for the countdown
var interval = setInterval(myInterval, 1000);

// a function to make the timer go
function myInterval() {
    console.log(interval);
}

// when the user clicks the START button, the timer starts counting down 3 minutes
// 
$("#start").on("click", function() {
    myInterval();
  $("#display").text(timeAllowed);
  timeAllowed--;
  console.log(timeAllowed);
});




// example from the stopwatch activity - to set up the conversion function
// function timeConverter(t) {

//     //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//         minutes = "00";
//     }

//     else if (minutes < 10) {
//         minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
// }




// The game ends when the time runs out. 
// The page reveals the number of questions that player answered correctly and incorrectly.

// To check if the answers that the player has given are matching the correct answers, compare them to the answers key [maybe an array?]

// Count how many correct answers, wrong answers, and unanswered questions has the player given.

// Display the result.

// I need to include:
    // countdown timer 
    // counter of the correct answers, counter for the incorrect answers, counter for unsanswered Qs
    // counter for the score; 
    // 

