var player;
var playerScore = 0;
var computer;
var computerScore = 0;

var choices = ["rock", "paper", "scissors", "lizard", "spock"];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        //Getting images as options.
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}
//Function for game play.
function selectChoice() {
    player = this.id;
    document.getElementById("player-choice").src = player + ".png";

//Code for computers random choice.
    computer = choices[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").src = computer + ".png";

//Code for checking results based on player choice and computer random choice.
    if (player == computer) {
        playerScore +=1;
        computerScore +=1;
    }
    else {
        if (player == "rock") {
            if (computer == "scissors" || "lizard") {
                playerScore += 1;
            }
            else if (computer == "paper" || "spock") {
                    computerScore += 1;
            }
        }
        else if (player == "paper") {
            if (computer == "rock" || "spock") {
                playerScore += 1;
            }
            else if (computer == "scissors" || "lizard") {
                    computerScore += 1;
            }
        }
        else if (player == "scissors") {
            if (computer == "paper" || "lizard") {
                playerScore += 1;
            }
            else if (computer == "rock" || "spock") {
                    computerScore += 1;
            }
        }    
        else if (player == "lizard") {
            if (computer == "paper" || "spock") {
                playerScore += 1;
            }
            else if (computer == "rock" || "scissors") {
                    computerScore += 1;        
            }
        } 
        else if (player == "spock") {
            if (computer == "rock" || "scissors") {
                playerScore += 1;
            }
            else if (computer == "paper" || "lizard") {
                    computerScore += 1;
            }
        }

//Getting results of game to show.   
document.getElementById("player-score").innerHTML = playerScore;
document.getElementById("computer-score").innerHTML = computerScore;
}
}
