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

let compStrength = 0;
let compAttack = 0;
let compDefense = 0;
let playerStrength = 0;
let playerAttack = 0;
let playerDefense = 0;

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
    document.getElementById("compone").innerText = `HP Remaining: ` + deckOne[0].hitpoints
    document.getElementById("playone").innerText = `HP Remaining: ` + deckTwo[0].hitpoints
    document.getElementById("comptwo").innerText = `HP Remaining: ` + deckOne[1].hitpoints
    document.getElementById("playtwo").innerText = `HP Remaining: ` + deckTwo[1].hitpoints
    document.getElementById("compthree").innerText = `HP Remaining: ` + deckOne[2].hitpoints
    document.getElementById("playthree").innerText = `HP Remaining: ` + deckTwo[2].hitpoints
    document.getElementById("compfour").innerText = `HP Remaining: ` + deckOne[3].hitpoints
    document.getElementById("playfour").innerText = `HP Remaining: ` + deckTwo[3].hitpoints
    document.getElementById("compfive").innerText = `HP Remaining: ` + deckOne[4].hitpoints
    document.getElementById("playfive").innerText = `HP Remaining: ` + deckTwo[4].hitpoints
}

updateStats()

document.getElementById("attack-button").addEventListener("click", handlePlayerTurn)
document.getElementById("defense-button").addEventListener("click", handlePlayerTurn)

let attackButton = document.getElementById("attack-button")
let defenseButton = document.getElementById("defense-button")
let endTurnButton = document.getElementById("end-turn")

endTurnButton.disabled = true
endTurnButton.style.opacity = ".25"
endTurnButton.style.backgroundColor = "grey"


// attackbutton.disabled

let playerDamageDone = 0;
let playerDefenseApplied = 0;
let computerDamageDone = 0;
let computerDefenseApplied = 0;
let turn = 1;

// }    console.log(event.target.innerText)

function checkHealth () {
    for (let i = 0; i < deckOne.length; i++) {
        if (deckOne[i].hitpoints <= 0) {
            delete deckOne[i]
        } else {
            continue
        }
    }
    console.log(deckOne)
}

//Player and Computer Turn Functions.
//For player, check if attack or defend is chosen.
//For computer, 50/50 chance of attack or defense.
//Attack and Defense successes are based on chance.
//Card[i] fights Card[i]

function handlePlayerTurn () {
    if (event.target.innerText === "Attack") {
        for (let i = 0; i < deckTwo.length; i++) {
            if (Math.random() < .4) {
                deckOne[i].hitpoints -= deckTwo[i].attack
                compStrength -= deckTwo[i].attack
                playerDamageDone += deckTwo[i].attack
                updateStats()
            }
            checkHealth();
        }
    } else if (event.target.innerText === "Defend") {
        for (let i = 0; i < deckTwo.length; i++) {
            if (Math.random() < .9) {
                deckTwo[i].hitpoints += deckTwo[i].defense
                playerStrength += deckTwo[i].defense
                playerDefenseApplied += deckTwo[i].defense
                updateStats()
            }
        }
    }
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

function handleComputerTurn () {
    if (Math.random() <= .5) {
        for (let i = 0; i < deckOne.length; i++) {
            if (Math.random() < .4) {
                deckTwo[i].hitpoints -= deckOne[i].attack
                playerStrength -= deckOne[i].attack
                computerDamageDone += deckOne[i].attack
                updateStats()
            }
        }
    } else {
        for (let i = 0; i < deckOne.length; i++) {
            if (Math.random() < .9) {
                deckOne[i].hitpoints += deckOne[i].defense
                compStrength += deckOne[i].defense
                computerDefenseApplied += deckOne[i].defense
                updateStats()
            }
        }
    }
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
