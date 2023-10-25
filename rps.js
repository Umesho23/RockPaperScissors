// Variables declaration
let userScore = 0;
let numberOfRounds;
let comScore = 0;

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// Function to randomly select the computer's choice
function getComputerChoice() {
  var choices = [
    "rock",
    "paper",
    "scissors"
  ];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// Function to update the disabled state of the choice buttons
function updateButtonState() {
  btn1.disabled = userScore == numberOfRounds || comScore == numberOfRounds;
  btn2.disabled = userScore == numberOfRounds || comScore == numberOfRounds;
  btn3.disabled = userScore == numberOfRounds || comScore == numberOfRounds;
}

// Function to get the number of rounds from the user
function getNumberOfRounds() {
  let rounds = parseInt(prompt("Enter the number of rounds you want to play:"));
  if (!isNaN(rounds) && rounds > 0) {
    numberOfRounds = rounds;
  }

  document.getElementById("SCORE").innerText = "Score " + numberOfRounds + " Points to Win!";
  document.getElementById("Points").innerHTML = "Score: 0-0";

  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
}

// Game logic for the "rock" choice
function rockChoice(computerSelection) {
  if (computerSelection === "rock") {
    document.getElementById("RESULT").innerHTML = ("Tie!");
    document.getElementById("RESULT").style.color = "#000000";
    document.getElementById("Points").innerHTML = ("Points:");
  }

  else if (computerSelection == "paper") {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("RESULT").style.color = "#ff0000";
    document.getElementById("Summary").innerHTML = ("User: rock and Computer: " + computerSelection);
    comScore++;
    document.getElementById("Points").innerHTML = ("Player:");
  }

  else {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("RESULT").style.color = "#73ff00";
    document.getElementById("Summary").innerHTML = ("User: rock and Computer: " + computerSelection);
    userScore++;
    document.getElementById("Points").innerHTML = ("Player:" + comScore);
  }

  let score = ("Score:" + userScore + "-" + comScore);
  document.getElementById("Points").innerHTML = (score);
  if (userScore == numberOfRounds) {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("PlayAgain").innerHTML = ("Click Reset to play again!");
    document.getElementById("Summary").innerHTML = ("");
  }

  if (comScore == numberOfRounds) {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("PlayAgain").innerHTML = ("Click Reset to play again!");
    document.getElementById("Summary").innerHTML = ("");
  }
  updateButtonState();
}

// Game logic for the "paper" choice
function paperChoice(computerSelection) {
  if (computerSelection == "paper") {
    document.getElementById("RESULT").innerHTML = ("Tie!");
    document.getElementById("RESULT").style.color = "#000000";
    document.getElementById("Summary").innerHTML = ("Both Papers");
  }

  else if (computerSelection == "scissors") {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("RESULT").style.color = "#ff0000";
    document.getElementById("Summary").innerHTML = ("User: paper and Computer: " + computerSelection);
    comScore++;
  }

  else {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("RESULT").style.color = "#73ff00";
    document.getElementById("Summary").innerHTML = ("User: paper and Computer: " + computerSelection);
    userScore++;
  }

  let score = ("Score:" + userScore + "-" + comScore);
  document.getElementById("Points").innerHTML = (score);
  if (userScore == numberOfRounds) {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("PlayAgain").innerHTML = ("Click Reset to play again!");
    document.getElementById("Summary").innerHTML = ("");
  }

  if (comScore == numberOfRounds) {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("PlayAgain").innerHTML = ("Click Reset to play again!");
    document.getElementById("Summary").innerHTML = ("");
  }
  updateButtonState();
}
// Game logic for the "scissors" choice
function scissorsChoice(computerSelection) {
  if (computerSelection == "scissors") {
    document.getElementById("RESULT").innerHTML = ("Tie!");
    document.getElementById("RESULT").style.color = "#000000";
    document.getElementById("Summary").innerHTML = ("Both Scissors")
  }

  else if (computerSelection == "rock") {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("RESULT").style.color = "#ff0000";
    document.getElementById("Summary").innerHTML = ("User: scissors and Computer: " + computerSelection);
    comScore++;
  }

  else {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("RESULT").style.color = "#73ff00";
    document.getElementById("Summary").innerHTML = ("User: scissors and Computer: " + computerSelection);
    userScore++;
  }

  let score = ("Score:" + userScore + "-" + comScore);
  document.getElementById("Points").innerHTML = (score);
  if (userScore == numberOfRounds) {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("PlayAgain").innerHTML = ("Click Reset to play again!");
    document.getElementById("Summary").innerHTML = ("");
  }

  if (comScore == numberOfRounds) {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("PlayAgain").innerHTML = ("Click Reset to play again!");
    document.getElementById("Summary").innerHTML = ("");
  }
  updateButtonState();
}

// Main game function that handles the player's choice
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    return rockChoice(computerSelection);
  }
  else if (playerSelection == "paper") {
    return paperChoice(computerSelection);
  }
  else if (playerSelection == "scissors") {
    return scissorsChoice(computerSelection);
  }
  else {
    return console.log("Enter a valid input");
  }
}

// Event listener for the rock button
btn1.addEventListener('click', function (e) {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLocaleLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

// Event listener for the paper button
btn2.addEventListener('click', function (e) {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLocaleLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

// Event listener for the scissors button
btn3.addEventListener('click', function (e) {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLocaleLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

// Event listener for the reset button
btn4.addEventListener('click', function (e) {
  document.getElementById("Points").innerHTML = ("Score: 0-0");
  comScore = 0;
  userScore = 0;
  document.getElementById("Summary").innerHTML = ("");
  document.getElementById("RESULT").innerHTML = ("");
  getNumberOfRounds();
});

// Function to reset the game
function resetGame() {
  document.getElementById("Points").innerHTML = "Score: 0-0";
  setTimeout(function() {
    getNumberOfRounds();
  }, 1000); 
  userScore = 0;
  comScore = 0;
}
// Initialize the game when the page is loaded
getNumberOfRounds();


