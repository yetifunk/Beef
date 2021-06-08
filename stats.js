//Card Statistics

const cardStats = [
    ["21 Savage",134,51,40,"/assets/21SAVAGE.png"],
    ["Andre 3000",140,60,31,"/assets/ANDRE3000.png"],
    ["A$AP Rocky",138,57,36,"/assets/ASAPROCKY.png"],
    ["Big Boi",128,58,31,"/assets/BIGBOI.png"],
    ["Biggie",147,68,48,"/assets/BIGGIE.png"],
    ["Busta Rhymes",119,43,41,"/assets/BUSTA.png"],
    ["J. Cole",158,71,29,"/assets/COLE.png"],
    ["Da Baby",123,41,22,"/assets/DABABY.png"],
    ["Danny Brown",121,35,47,"/assets/DANNYBROWN.png"],
    ["DMX",129,54,34,"/assets/DMX.png"],
    ["E-40",139,42,33,"/assets/E40.png"],
    ["Earl Sweatshirt",139,43,51,"/assets/EARL.png"],
    ["Future",138,40,32,"/assets/FUTURE.png"],
    ["Jadakiss",132,39,49,"/assets/JADA.png"],
    ["Jay-Z",148,59,50,"/assets/JAYZ.png"],
    ["Kendrick Lamar",160,64,52,"/assets/KENRICK.png"],
    ["Killer Mike",152,43,60,"/assets/KILLERMIKE.png"],
    ["Kodak Black",115,32,23,"/assets/KODAK.png"],
    ["Lil Wayne",142,63,31,"/assets/LILWAYNE.png"],
    ["Mac Dre",128,45,52,"/assets/MACDRE.png"],
    ["Mac Miller",120,52,24,"/assets/MACMILLER.png"],
    ["Method Man",142,51,45,"/assets/METHODMAN.png"],
    ["MF DOOM",159,59,44,"/assets/MFDOOM.png"],
    ["Mos Def",121,55,34,"/assets/MOSDEF.png"],
    ["Nas",151,49,53,"/assets/NAS.png"],
    ["ODB",133,37,46,"/assets/ODB.png"],
    ["Pusha T",140,47,39,"/assets/PUSHAT.png"],
    ["RZA",132,41,64,"/assets/RZA.png"],
    ["Schoolboy Q",133,40,47,"/assets/SCHOOLBOYQ.png"],
    ["Slick Rick",127,33,67,"/assets/SLICKRICK.png"],
    ["Snoop Dogg",145,49,33,"/assets/SNOOP.png"],
    ["Travis Scott",126,43,51,"/assets/TRAVISSCOTT.png"],
    ["Tupac",158,67,54,"/assets/TUPAC.png"],
    ["Tyler the Creator",137,42,40,"/assets/TYLER.png"],
    ["Young Thug",129,45,44,"/assets/YOUNGTHUG.png"]
]

cardDeck = [];

//Class Setup, Deck Creation, Shuffling and Dealing

class Card {
    constructor(name, hitpoints, attack, defense, imagesrc) {
        this.name = name;
        this.hitpoints = hitpoints;
        this.attack = attack;
        this.defense = defense;
        this.imagesrc = imagesrc;
    }
}

for (let i = 0; i < cardStats.length; i++) {
    let card = new Card (
        cardStats[i][0],
        cardStats[i][1],
        cardStats[i][2],
        cardStats[i][3],
        cardStats[i][4]
    );
    cardDeck.push(card);
}

const shuffled = cardDeck.sort(() => 0.5 - Math.random());

let deckOne = cardDeck.splice(0, 5);
let deckTwo = cardDeck.splice(0, 5);