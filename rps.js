function getComputerChoice() {
    var choices = [
        "rock",
        "paper",
        "scissors"
    ];

    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}


function rockChoice(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return console.log("Tie: Both Rocks");
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        return console.log("You lose! User:" + playerSelection + " and Computer:" + computerSelection);
    }

    else (playerSelection == "rock" && computerSelection == "scissors")
    return console.log("You win! User:" + playerSelection + " and Computer:" + computerSelection);
}


function paperChoice(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "paper") {
        return console.log("Tie: Both Papers");
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return console.log("You lose! User:" + playerSelection + " and Computer:" + computerSelection);
    }

    else
        return console.log("You win! User:" + playerSelection + " and Computer:" + computerSelection);

}

function scissorsChoice(playerSelection, computerSelection) {
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return console.log("Tie: Both Scissors")
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return console.log("You lose! User:" + playerSelection + " and Computer:" + computerSelection);
    }

    else (playerSelection == "scissors" && computerSelection == "paper")
    return console.log("You win! User:" + playerSelection + " and Computer:" + computerSelection);

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        return rockChoice("rock", computerSelection);
    }
    else if (playerSelection == "paper") {
        return paperChoice("paper", computerSelection);
    }
    else {
        return scissorsChoice("scissors", computerSelection);
    }
}



let playerSelection = prompt("Rock, Paper, Scissors:");
let computerSelection = getComputerChoice();
playerSelection = playerSelection.toLocaleLowerCase();
computerSelection = computerSelection.toLocaleLowerCase();
console.log(playRound(playerSelection, computerSelection));