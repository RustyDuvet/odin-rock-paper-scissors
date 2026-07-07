function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors:");
    return choice;
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase()
    console.log(`You chose: ${humanChoice}`)
    console.log(`Computer chose: ${computerChoice}`)
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (computerChoice === "rock" && humanChoice === "paper" || 
        computerChoice === "paper" && humanChoice === "scissors" || 
        computerChoice === "scissors" && humanChoice === "rock") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        return "computer"
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let outcome;
    for(let i = 0; i < 5; i++) {
        outcome = playRound(getComputerChoice(), getHumanChoice());
        if (outcome === "human") {
            humanScore++;
        } else if (outcome === "computer") {
            computerScore++;
        }
    }
    console.log(`Final Score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    if(humanScore > computerScore) {
        console.log("Human is the final winner!"); 
    } else if(humanScore < computerScore) {
        console.log("Computer is the final winner!"); 
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();