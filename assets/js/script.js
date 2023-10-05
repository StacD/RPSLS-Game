const pScore = 0;
const cScore = 0;
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const rockBtn = document.getElementById("r");
const paperBtn = document.getElementById("p");
const scissorsBtn = document.getElementById("sc");
const lizardBtn = document.getElementById("l");
const spockBtn = document.getElementById("sp");

function start() {
    rockBtn.addEventListener("click", function() {
        play("r")
    })

    paperBtn.addEventListener("click", function() {
        play("p")
    })

    scissorsBtn.addEventListener("click", function() {
        play("sc")
    })

    lizardBtn.addEventListener("click", function () {
        play("l")
    })

    spockBtn.addEventListener("click", function () {
        play("sp")
    })
}

function getComputerChoice() {
    const choices = ["r", "p", "sc", "l", "sp"]
    const ranNum = Math.floor(Math.random() *5); //allows computer pick number between 0-5 ie 0,1,2,3,4
    return choices[ranNum]
}

