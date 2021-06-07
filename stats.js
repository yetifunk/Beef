const cardStats = [
    ["21 Savage",134,51,40,"/assets/21SAVAGE.PNG"],
    ["Andre 3000",140,60,31,"/assets/ANDRE3000.PNG"],
    ["A$AP Rocky",138,57,36,"/assets/ASAPROCKY.PNG"],
    ["Big Boi",128,58,31,"/assets/BIGBOI.PNG"],
    ["Biggie",147,68,48,"/assets/BIGGIE.PNG"],
    ["Busta Rhymes",119,43,41,"/assets/BUSTA.PNG"],
    ["J. Cole",158,71,29,"/assets/COLE.PNG"],
    ["Da Baby",123,41,22,"/assets/DABABY.PNG"],
    ["Danny Brown",121,35,47,"/assets/DANNYBROWN.PNG"],
    ["DMX",129,54,34,"/assets/DMX.PNG"],
    ["E-40",139,42,33,"/assets/E40.PNG"],
    ["Earl Sweatshirt",139,43,51,"/assets/EARL.PNG"],
    ["Future",138,40,32,"/assets/FUTURE.PNG"],
    ["Jadakiss",132,39,49,"/assets/JADA.PNG"],
    ["Jay-Z",148,59,50,"/assets/JAYZ.PNG"],
    ["Kendrick Lamar",160,64,52,"/assets/KENDRICK.PNG"],
    ["Killer Mike",152,43,60,"/assets/KILLERMIKE.PNG"],
    ["Kodak Black",115,32,23,"/assets/KODAK.PNG"],
    ["Lil Wayne",142,63,31,"/assets/LILWAYNE.PNG"],
    ["Mac Dre",128,45,52,"/assets/MACDRE.PNG"],
    ["Mac Miller",120,52,24,"/assets/MACMILLER.PNG"],
    ["Method Man",142,51,45,"/assets/METHODMAN.PNG"],
    ["MF DOOM",159,59,44,"/assets/MFDOOM.PNG"],
    ["Mos Def",121,55,34,"/assets/MOSDEF.PNG"],
    ["Nas",151,49,53,"/assets/NAS.PNG"],
    ["ODB",133,37,46,"/assets/ODB.PNG"],
    ["Pusha T",140,47,39,"/assets/PUSHAT.PNG"],
    ["RZA",132,41,64,"/assets/RZA.PNG"],
    ["Schoolboy Q",133,40,47,"/assets/SCHOOLBOYQ.PNG"],
    ["Slick Rick",127,33,67,"/assets/SLICKRICK.PNG"],
    ["Snoop Dogg",145,49,33,"/assets/SNOOP.PNG"],
    ["Travis Scott",126,43,51,"/assets/TRAVISSCOTT.PNG"],
    ["Tupac",158,67,54,"/assets/TUPAC.PNG"],
    ["Tyler the Creator",137,42,40,"/assets/TYLER.PNG"],
    ["Young Thug",129,45,44,"/assets/YOUNGTHUG.PNG"]
]

cardDeck = [];

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

console.log(cardDeck)