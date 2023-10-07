const pScore = 0;
const cScore = 0;

const playerOptions = [rBtn,pBtn,scBtn,lBtn,spBtn];
const computerOptions = ["r", "p", "sc", "l", "sp"];

//buttons
function pick() {
    const rBtn = document.getElementById("r").innerHTML = "rock is selected";
const pBtn = document.getElementById("p");
const scBtn = document.getElementById("sc");
const lBtn = document.getElementById("l");
const spBtn = document.getElementById("sp");
}

//function for player to pick their option and generate computers option.
playerOptions.forEach(options => {
    options.addEventListener("click", function() {
        const computerOption = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerPick];
        return (playerOptions);

      
    })
})
