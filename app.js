const startButton = document.getElementById("startgame")
startButton.addEventListener("click", START)
const intro = document.getElementById("intro-container")
const gameboard = document.getElementById("background")

function START () {
    intro.style.visibility = "hidden"
    gameboard.style.visibility = "visible"
}


function UPDATECARDS () {
    document.getElementById("card1").src = `${deckOne[0].imagesrc}`;
    document.getElementById("card2").src = `${deckOne[1].imagesrc}`;
    document.getElementById("card3").src = `${deckOne[2].imagesrc}`;
    document.getElementById("card4").src = `${deckOne[3].imagesrc}`;
    document.getElementById("card5").src = `${deckOne[4].imagesrc}`;
    document.getElementById("card6").src = `${deckTwo[0].imagesrc}`;
    document.getElementById("card7").src = `${deckTwo[1].imagesrc}`;
    document.getElementById("card8").src = `${deckTwo[2].imagesrc}`;
    document.getElementById("card9").src = `${deckTwo[3].imagesrc}`;
    document.getElementById("card10").src = `${deckTwo[4].imagesrc}`;
}

UPDATECARDS()

let compStrength = 0;
let compAttack = 0;
let compDefense = 0;
let playerStrength = 0;
let playerAttack = 0;
let playerDefense = 0;
let playerDamageDone = 0;
let playerDefenseApplied = 0;
let computerDamageDone = 0;
let computerDefenseApplied = 0;
let turn = 0;
let compKills = 0;
let playerKills = 0;

for (let i = 0; i < deckOne.length; i++) {
    compStrength += deckOne[i].hitpoints;
    compAttack += deckOne[i].attack;
    compDefense += deckOne[i].defense;
}

for (let i = 0; i < deckTwo.length; i++) {
    playerStrength += deckTwo[i].hitpoints;
    playerAttack += deckTwo[i].attack;
    playerDefense += deckTwo[i].defense;
}

function updateStats () {

    document.getElementById("oppHP").innerText = "Hitpoints: " + compStrength;
    document.getElementById("oppATK").innerText = "Attack: " + compAttack;
    document.getElementById("oppDEF").innerText = "Defense: " + compDefense;
    document.getElementById("playHP").innerText = "Hitpoints: " + playerStrength;
    document.getElementById("playATK").innerText = "Attack: " + playerAttack;
    document.getElementById("playDEF").innerText = "Defense: " + playerDefense;

    document.getElementById("compone").innerText = `HP Remaining: ` + deckOne[0]?.hitpoints
    document.getElementById("playone").innerText = `HP Remaining: ` + deckTwo[0]?.hitpoints
    document.getElementById("comptwo").innerText = `HP Remaining: ` + deckOne[1]?.hitpoints
    document.getElementById("playtwo").innerText = `HP Remaining: ` + deckTwo[1]?.hitpoints
    document.getElementById("compthree").innerText = `HP Remaining: ` + deckOne[2]?.hitpoints
    document.getElementById("playthree").innerText = `HP Remaining: ` + deckTwo[2]?.hitpoints
    document.getElementById("compfour").innerText = `HP Remaining: ` + deckOne[3]?.hitpoints
    document.getElementById("playfour").innerText = `HP Remaining: ` + deckTwo[3]?.hitpoints
    document.getElementById("compfive").innerText = `HP Remaining: ` + deckOne[4]?.hitpoints
    document.getElementById("playfive").innerText = `HP Remaining: ` + deckTwo[4]?.hitpoints
}

updateStats()

let attackButton = document.getElementById("attack-button")
let defenseButton = document.getElementById("defense-button")
let endTurnButton = document.getElementById("end-turn")

attackButton.addEventListener("click", handlePlayerTurn)
defenseButton.addEventListener("click", handlePlayerTurn)
endTurnButton.addEventListener("click", handleComputerTurn)

endTurnButton.disabled = true
endTurnButton.style.opacity = ".25"
endTurnButton.style.backgroundColor = "grey"

function checkHealth () {
    for (let i = 0; i < deckOne.length; i++) {
        if (deckOne[i].hitpoints <= 0 || deckOne[i].hitpoints === "K.I.A") {
            deckOne[i].hitpoints = "K.I.A"
            deckOne[i].imagesrc= "./assets/cardback.png"
            UPDATECARDS()
            updateStats();
        } else {
            continue
        } 
    }
    for (let i = 0; i < deckTwo.length; i++) {
        if (deckTwo[i].hitpoints <= 0 || deckTwo[i].hitpoints === "K.I.A") {
            deckTwo[i].hitpoints = "K.I.A"
            deckTwo[i].imagesrc = "./assets/cardback.png"
            UPDATECARDS()
            updateStats();
        } else {
            continue
        }
    }
    if (turn === 10) {
        endGame();
    }
}

//Player and Computer Turn Functions.
//For player, check if attack or defend is chosen.
//For computer, 50/50 chance of attack or defense.
//Attack and Defense successes are based on chance.
//Card[i] fights Card[i]

function handlePlayerTurn () {
    checkHealth();
    if (event.target.innerText === "Attack") {
        for (let i = 0; i < deckTwo.length; i++) {
            if (deckTwo[i].hitpoints === "K.I.A" || deckOne[i].hitpoints === "K.I.A") {
                continue
            } else if (Math.random() < .4) {
                deckOne[i].hitpoints -= deckTwo[i].attack
                if (deckOne[i].hitpoints < 0) {
                    playerKills += 1
                    compStrength -= deckTwo[i].attack
                    compStrength += Math.abs(deckOne[i].hitpoints)
                    updateStats();
                } else {
                    compStrength -= deckTwo[i].attack
                }    
                playerDamageDone += deckTwo[i].attack
                updateStats()
            }
            checkHealth();
        }
    } else if (event.target.innerText === "Defend") {
        for (let i = 0; i < deckTwo.length; i++) {
            if (deckTwo[i].hitpoints === "K.I.A") {
                continue
            } else if (Math.random() < .8) {
                deckTwo[i].hitpoints += deckTwo[i].defense
                playerStrength += deckTwo[i].defense
                playerDefenseApplied += deckTwo[i].defense
                updateStats()
            }
            checkHealth();
        }
    }
    turn += 1
    checkHealth();
    handlePlayerTurnOver()
}

function handleComputerTurn () {
    checkHealth();
    if (Math.random() <= .7) {
        for (let i = 0; i < deckOne.length; i++) {
            if (deckOne[i].hitpoints === "K.I.A" || deckTwo[i].hitpoints === "K.I.A") {
                continue
            } else if (Math.random() < .4) {
                deckTwo[i].hitpoints -= deckOne[i].attack
                if (deckTwo[i].hitpoints < 0) {
                    compKills += 1
                    playerStrength -= deckOne[i].attack
                    playerStrength += Math.abs(deckTwo[i].hitpoints)
                    updateStats();
                } else { 
                    playerStrength -= deckOne[i].attack
                }
                computerDamageDone += deckOne[i].attack
                updateStats()
            }
            checkHealth();
        }
    } else {
        for (let i = 0; i < deckOne.length; i++) {
            if (deckOne[i].hitpoints === "K.I.A") {
                continue
            } else if (Math.random() < .8) {
                deckOne[i].hitpoints += deckOne[i].defense
                compStrength += deckOne[i].defense
                computerDefenseApplied += deckOne[i].defense
                updateStats()
            }
            checkHealth();
        }
    }
    turn += 1
    checkHealth();
    handleComputerTurnOver()
}

function handlePlayerTurnOver () {
    endTurnButton.disabled = false
    endTurnButton.style.opacity = ""
    endTurnButton.style.backgroundColor = ""
    attackButton.disabled = true
    attackButton.style.opacity = ".25"
    attackButton.style.backgroundColor = "grey"
    defenseButton.disabled = true
    defenseButton.style.opacity = ".25"
    defenseButton.style.backgroundColor = "grey"
}

function handleComputerTurnOver () {
    endTurnButton.disabled = true
    endTurnButton.style.opacity = ".25"
    endTurnButton.style.backgroundColor = "grey"
    attackButton.disabled = false
    attackButton.style.opacity = ""
    attackButton.style.backgroundColor = ""
    defenseButton.disabled = false
    defenseButton.style.opacity = ""
    defenseButton.style.backgroundColor = ""
}

const endScreen = document.getElementById("game-end-stats")
const endScreenContainer = document.getElementById("game-end")
function endGame () {
    let playEnd = playerDamageDone + (playerKills * 100) - (computerDefenseApplied / 2)
    let compEnd = computerDamageDone + (compKills * 100) - (playerDefenseApplied / 2)
    if (playEnd > compEnd) {
        winner = "Player Wins!"
    } else if (compEnd > playEnd) {
        winner = "Computer Wins!"
    } else if (compEnd = playEnd) {
        winner = "Its A Tie!"
    }

    endScreenContainer.style.visibility = "visible"
    endScreen.innerHTML = `
    <h1>Game Stats</h1>
    <br>
    <h2>Player:</h2>
    <h2>Damage Dealt: ${playerDamageDone}</h2>
    <h2>Defense Applied: ${playerDefenseApplied}</h2>
    <h2>Kills: ${playerKills}</h2>
    <h2>Final Score: ${playEnd}</h2>
    <br>
    <h2>Computer:</h2>
    <h2>Damage Dealt: ${computerDamageDone}</h2>
    <h2>Defense Applied: ${computerDefenseApplied}</h2>
    <h2>Kills: ${compKills}</h2>
    <h2>Final Score: ${compEnd}
    <br>
    <h1>${winner}
    <br>
    <button type="button" id="newgamebutton">New Game</button>
    `
    document.getElementById("newgamebutton").addEventListener("click", NEWGAME)
}

function NEWGAME () {
    location.reload();
}