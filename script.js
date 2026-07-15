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

function playRound(computerChoice, humanChoice, count, humanCount, computerCount, final, output, results) {

    if (count > 5) {
        return;
    }

    if (count === 5) {
        results.forEach((result) => {
        if (result == "human") {
            humanCount++;
        } else if (result == "computer") {
            computerCount++;
        }
    })

    if (humanCount > computerCount) {
        final.textContent = "Human Won!"
    } else if (humanCount < computerCount) {
        final.textContent = "Computer Won!"
    } else {
        final.textContent = "It's a Tie!"
    }

        return;
    }
    
    output.textContent += `You chose: ${humanChoice}\n`;
    output.textContent += `Computer chose: ${computerChoice}\n`;

    if (computerChoice === humanChoice) {
        output.textContent += "It's a tie!\n\n";
        return "tie";
    } else if (computerChoice === "rock" && humanChoice === "paper" || 
        computerChoice === "paper" && humanChoice === "scissors" || 
        computerChoice === "scissors" && humanChoice === "rock") {
        output.textContent += `You Win! ${humanChoice} beats ${computerChoice}\n\n`;
        return "human";
    } else {
        output.textContent += `You Lose! ${computerChoice} beats ${humanChoice}\n\n`;
        return "computer";
    }
    
}

function playGame(computerChoice, humanChoice) {

    let humanCount = 0
    let computerCount = 0
    let count = 0
    let results = []

    const output = document.querySelector("#text")

    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissors = document.querySelector("#scissors")
    const buttons = document.querySelector(".buttons")
    const times = document.querySelector("#times")
    const finalVal = document.querySelector("#final")

    rock.addEventListener("click",() => {
        results.push(playRound(getComputerChoice(), "rock", count, humanCount, computerCount, finalVal, output, results));
    });
    paper.addEventListener("click",() => {
        results.push(playRound(getComputerChoice(), "paper", count, humanCount, computerCount, finalVal, output, results));
    });
    scissors.addEventListener("click",() => {
        results.push(playRound(getComputerChoice(), "scissors", count, humanCount, computerCount, finalVal, output, results));
    });
    buttons.addEventListener("click", () => {  
        count++;
        if (count > 5){
            return;
        }
        times.textContent = `Times: ${count}`
    });

}

playGame(getComputerChoice());



    








