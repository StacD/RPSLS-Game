var player;
var playerScore = 0;
var system;
var systemScore = 0;

var choices = ["rock", "paper", "scissors", "lizard", "spock"];

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
};

function selectChoice() {
    player = this.id;
    document.getElementById("player-choice").src = player + ".png";

    //random for oppponent
    system = choices[Math.floor(Math.random() * 5)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("system-choice").src = system + ".png";

    //check for winner
    if (player == system) {
        playerScore += 0;
        systemScore += 0;
    }
    else
        if (player == "rock") {
            if (system == "scissors") {
                playerScore += 1;
            }
            else if (system == "paper") {
                systemScore += 1;
            }
            else if (system == "lizard") {
                playerScore += 1;
            }
            else if (system = "spock") {
                systemScore += 1;
            }
        }

        else
            if (player == "paper") {
                if (system == "scissors") {
                    systemScore += 1;
                }
                else if (system == "rock") {
                    playerScore += 1;
                }
                else if (system == "lizard") {
                    systemScore += 1;
                }
                else if (system = "spock") {
                    playerScore += 1;
                }

            }

            else
                if (player == "scissors") {
                    if (system == "spock") {
                        systemScore += 1;
                    }
                    else if (system == "rock") {
                        systemScore += 1;
                    }
                    else if (system == "lizard") {
                        playerScore += 1;
                    }
                    else if (system = "paper") {
                        playerScore += 1;
                    }

                }

                else
                    if (player == "lizard") {
                        if (system == "spock") {
                            playerScore += 1;
                        }
                        else if (system == "rock") {
                            systemScore += 1;
                        }
                        else if (system == "scissors") {
                            systemScore += 1;
                        }
                        else if (system = "paper") {
                            playerScore += 1;
                        }
                    }

                    else
                        if (player == "spock") {
                            if (system == "lizard") {
                                systemScore += 1;
                            }
                            else if (system == "rock") {
                                playerScore += 1;
                            }
                            else if (system == "scissors") {
                                playerScore += 1;
                            }
                            else if (system = "paper") {
                                systemScore += 1;
                            }
                        }

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("system-score").innerText = systemScore;
}