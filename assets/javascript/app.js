// to check if the javascript is linked to the html
console.log("This works");

//a variable holding the time allowed
var time = 120;
// a variable for the interval
var intervalId;
var converted;
var clockRunning = false;

// we can use an anonymous function 
// to run the code that we want to function
// inside of the setInterval
$("#start-timer").on("click", function () {
  // the function() inside of setInterval
  // is the anonymous function
  intervalId = setInterval(function () {
    // which we are saying
    // run these steps 
    // every 1000 ms


    time--;

    $("#timer").text(converted(time));

    if (time === 0) {
      stop();
      alert("Time is up!");
    }

  }, 1000);

});

// the timer stops when we run out of time
// function to stop interval
// and reset time to 2 minutes 
function stop() {
  clearInterval(intervalId);
  clockRunning = false;
  time = 120;
}

//  time converting function 
function converted(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


// set an array with correct answers
var answerKey = [2, 2, 2];

// counters for the correct answers, the incorrect answers, and the unsanswered Qs
var correctAns = 0;
var incorrectAns = 0;
var unansweredQs = 0;

// When the user clicks button "Done!", the timer stops
$("#submit-answers").on("click", function () {
  stop();
// an array for user's answers that gets populated based on what radip button the user selected: 
var userChoice = [$("input:radio[name=0]:checked").val(),
                  $("input:radio[name=1]:checked").val(),
                  $("input:radio[name=2]:checked").val()];

  console.log(userChoice);

// then the program checks the user's answers against the answerKey
// and counts how many correct answers, wrong answers, and unanswered questions has the player given

if (userChoice[0] == answerKey[0]) {
    correctAns++
  } else if (userChoice[0] == undefined) {
    unansweredQs++
  } else {
    incorrectAns++
  }

  if (userChoice[1] == answerKey[1]) {
    correctAns++
  } else if (userChoice[1] == undefined) {
    unansweredQs++
  } else {
    incorrectAns++
  }

  if (userChoice[2] == answerKey[2]) {
    correctAns++
  } else if (userChoice[2] == undefined) {
    unansweredQs++
  } else {
    incorrectAns++
  }
 
  // Display the results

  $("#results-printed").append("<p>" + "You answered correct " + correctAns + " questions");
  $("#results-printed").append("<p>" + "You gave incorrect answers to " + incorrectAns + " questions");
  $("#results-printed").append("<p>" + "You left unanswered " + unansweredQs + " questions");
});
