<body>
    <h1>Question Game!</h1>
    <p>Score: <span id="score-text"></span></p>
    <p id="question-text"></p>
    <script>

        // setting up questions in an array of objects
        var questions = [
            { q: "Is the sky blue?", a: "t" },
            { q: "Is Travis married?", a: "f" },
            { q: "Is the world flat?", a: "f" }
        ];

        // making initial score and count variables
        var score = 0;
        var count = 0;

        // getting the question-text element by it's id
        var questionText = document.getElementById("question-text");

        // displaying the first question in the array 
        questionText.textContent = questions[count].q;

        // getting the score-text element by it's id
        var scoreText = document.getElementById("score-text");

        // displaying the score value on the page
        scoreText.textContent = score;


        // everytime the user presses a key on the keyboard
        document.onkeyup = function (event) {

            // store the key pressed in a variable called userGuess
            var userGuess = event.key;
            // only run if user picks t or f
            if (userGuess === "t" || userGuess === "f") {
                // if the count equals the questions array length
                // stop the game
                if (count === questions.length) {
                    // return stops the code 
                    // from going any further
                    return;
                }

                // if the user gives us the correct answer
                if (userGuess === questions[count].a) {
                    // alert correct!
                    alert("correct!");
                    // increment score by one
                    score++;
                    // update the score text
                    scoreText.textContent = score;
                } else {
                    //otherwise 
                    // alert incorrect!
                    alert("incorrect!");
                }

                // go to the next question using count
                count++;
                
                // if count is less then questions.length
                if (count < questions.length) {
                    // show next question
                    questionText.textContent = questions[count].q;
                } else {
                    // otherwise show the game over text with the score
                    questionText.textContent = "Game Over! " + score + " out of " + questions.length + " questions correct!";
                }
            }
        }

    </script>
</body>