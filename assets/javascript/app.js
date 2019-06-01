// to check if the javascript is linked to the html
console.log("This works");

//a variable holding the time allowed
var time = 180000;
// a variable for the interval
var intervalId;

// we can use an anonymous function 
// to run the code that we want to function
// inside of the setInterval
$("#start-timer").on("click", function(){
  // the function() inside of setInterval
  // is the anonymous function
  intervalId = setInterval(function() {
    // which we are saying
    // run these steps 
    // every 1000 ms
    time--;
    $("#timer").text(time);
  }, 1000)
});

// we could also use a named function vs an anonymous function
// uncomment this code below to see it in action
// function setTime(){
//    time--;
//     $("#timer").text(time);
// }

// $("#start-timer").on("click", function(){
//   intervalId = setInterval(setTime, 1000)
// });



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

// set my array with correct answers
var answerKey = [2, 2, 2];

// what I found for checking values in the radio buttons
// $("input:radio[name="..."]:checked").val()

// To check if the answers that the player has given are matching the correct answers, compare them to the answers key [in an array]
var userChoice = [1, 2, 3];

 // counter of the correct answers, counter for the incorrect answers, counter for unsanswered Qs
 var correctAns = 0;
 var incorrectAns = 0;
 var unansweredQs = 0;

// Count how many correct answers, wrong answers, and unanswered questions has the player given.
if (userChoice[0] === answerKey[0]) {
  correctAns++
} else if (userChoice[0] === answerKey[0]) {
  incorrectAns++
} else {
  unansweredQs++
}

if (userChoice[1] === answerKey[1]) {
  correctAns++
} else if (userChoice[1] === answerKey[1]) {
  incorrectAns++
} else {
  unansweredQs++
}

if (userChoice[2] === answerKey[2]) {
  correctAns++
} else if (userChoice[2] === answerKey[2]) {
  incorrectAns++
} else {
  unansweredQs++
}

// Display the result.
alert("You answered correct " + correctAns + " questions");
alert("You gave incorrect answers to " + incorrectAns + " questions");
alert("You left unanswered " + unansweredQs + " questions");

