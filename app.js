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
}

updateStats()

document.getElementById("attack-button").addEventListener
document.getElementById("defense-button").addEventListener

let turn = 0;

