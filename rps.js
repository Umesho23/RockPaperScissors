function getComputerChoice() {
  var choices = [
    "rock",
    "paper",
    "scissors"
  ];

  //Testing
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

let userScore = 0;
let comScore = 0;

function rockChoice(computerSelection) {
  if (computerSelection === "rock") {
    document.getElementById("RESULT").innerHTML = ("Tie!");
    document.getElementById("RESULT").style.color = "#000000";
    document.getElementById("Points").imnerHTML = ("Points:");
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
  if (userScore == 5) {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("Summary").innerHTML = ("");
    userScore = 0;
    comScore = 0;
  }

  if (comScore == 5) {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("Summary").innerHTML = ("");
    userScore = 0;
    comScore = 0;
  }

}


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
  if (userScore == 5) {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("Summary").innerHTML = ("");
    userScore = 0;
    comScore = 0;
  }

  if (comScore == 5) {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("Summary").innerHTML = ("");
    userScore = 0;
    comScore = 0;
  }

}

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
  if (userScore == 5) {
    document.getElementById("RESULT").innerHTML = ("You win!");
    document.getElementById("Summary").innerHTML = ("");
    userScore = 0;
    comScore = 0;
  }

  if (comScore == 5) {
    document.getElementById("RESULT").innerHTML = ("You lose!");
    document.getElementById("Summary").innerHTML = ("");
    userScore = 0;
    comScore = 0;
  }

}

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


btn1.addEventListener('click', function (e) {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLocaleLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

btn2.addEventListener('click', function (e) {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLocaleLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

btn3.addEventListener('click', function (e) {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLocaleLowerCase();
  computerSelection = computerSelection.toLocaleLowerCase();
  playRound(playerSelection, computerSelection);
  console.log(playerSelection);
});

btn4.addEventListener('click', function (e) {
  document.getElementById("Points").innerHTML = ("Score: 0-0");
  comScore = 0;
  userScore = 0;
  document.getElementById("Summary").innerHTML = ("");
  document.getElementById("RESULT").innerHTML = ("");
});





