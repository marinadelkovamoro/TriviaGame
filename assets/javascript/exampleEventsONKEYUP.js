  // Let's start by grabbing a reference to the <span> below.
// IT IS VERY IMPORTANT TO SET THIS VAR FIRST BECAUSE IT SHOWS WHICH/WHERE ARE WE GETTING THE DATA/TEXT FROM ON THE WEBPAGE(DOCUMENT)
var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
// REMEMBER THIS document.onkeyup <<<--- when the user presses on a button and releases it! 
// Then textContent is the JavaScript code that tells the program to grab the text that was written and assigns it to the variable userText WHEN (=) event.key <--- (this is another code to remember) 
document.onkeyup = function(event) {
  userText.textContent = event.key;
};