var pScore = 0; document.getElementById("player-score");
var cScore = 0;
const computerOptions = ["r", "p", "sc", "l", "sp"];

var choices = ["rock", "paper", "scissors",];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}
//Declared buttons
const rBtn = document.getElementById("r").innerHTML = "Rock";
const pBtn = document.getElementById("p").innerHTML = "Paper";
const scBtn = document.getElementById("sc").innerHTML = "Scissors";
const lBtn = document.getElementById("l").innerHTML = "Lizard";
const spBtn = document.getElementById("sp").innerHTML = "Spock";

//Player Selection
//generate computers choice using random.

var playerChoice = "Rock";
    document.getElementById("r").innerHTML = button;

    function pR() {
        document.getElementById("player-choice").innerHTML = "you picked rock"

    var computerSelection = computerOptions [Math.floor(Math.random() * 5)];
        document.getElementById("computer-choice").innerHTML = "Computer" + computerSelection;
    }

var playerChoice = "Paper";
    document.getElementById("p").innerHTML = button;

    function pP() {
    document.getElementById("player-choice").innerHTML = "you picked paper";

    var computerselection = computerOptions[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").innerHTML = "Computer" + computerselection;
    }

var playerChoice = "Scissors";
    document.getElementById("sc").innerHTML = button;

    function pSc() {
    document.getElementById("player-choice").innerHTML = "you picked scissors";

    var computerselection = computerOptions[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").innerHTML = "Computer" + computerselection;
    }

var playerChoice = "Lizard";
    document.getElementById("l").innerHTML = button;

    function pL() {
    document.getElementById("player-choice").innerHTML = "you picked lizard";

    var computerselection = computerOptions[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").innerHTML = "Computer" + computerselection;
    }

var playerChoice = "Spock";
    document.getElementById("sp").innerHTML = button;

    function pSp() {
    document.getElementById("player-choice").innerHTML = "you picked spock";

    var computerselection = computerOptions[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").innerHTML = "Computer" + computerselection;
    }

// Score record
function results() {
    if (playerChoice == computerSelection) {
        pScore += 1;
        cScore += 1;
    }
            
    
    
    document.getElementById("player-score").innerHTML = "Your Score:" + pScore;
    document.getElementById("computer-score").innerHTML = "Computer Score:" + cScore;
    }
