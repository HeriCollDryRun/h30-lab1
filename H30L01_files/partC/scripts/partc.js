const outDiv = document.querySelector("main");
outDiv.innerHTML = "";

const fullCardInfo = (card) => {
    return `${card.getStringVal()} is ${card.getCardColour()}
    and face ${(card.faceup)? "up" : "down"}<br/>`;
}

outDiv.innerHTML += "<h3>Individual Card Test</h3>";
let testCard1 = new Card(0, 5, 0, true);
let testCard2 = new Card(2, 0, 1, true);
let testCard3 = new Card(3, 12, 1);

outDiv.innerHTML += fullCardInfo(testCard1);
outDiv.innerHTML += fullCardInfo(testCard2);
outDiv.innerHTML += fullCardInfo(testCard3);

outDiv.innerHTML += "<h3>Flip Card Test</h3>";
testCard2.flipCard();
testCard3.flipCard();

outDiv.innerHTML += fullCardInfo(testCard2);
outDiv.innerHTML += fullCardInfo(testCard3);

let deck = new Deck(1);
outDiv.innerHTML += "<h3>Full Deck Test</h3>";
for (let i=0; i<deck.cards.length; i++) {
    outDiv.innerHTML += fullCardInfo(deck.cards[i]);
}

let deck2 = new Deck(3);
outDiv.innerHTML += "<h3>Three Decks Test</h3>";
for (let i=0; i<deck2.cards.length; i++) {
    outDiv.innerHTML += fullCardInfo(deck2.cards[i]);
}

let dealtCard1 = deck.dealCard();
let dealtCard2 = deck.dealCard();
let dealtCard3 = deck.dealCard();

outDiv.innerHTML += "<h3>Deal Test</h3>";
outDiv.innerHTML += fullCardInfo(dealtCard1);
outDiv.innerHTML += fullCardInfo(dealtCard3);

for (let i=0; i<15; i++) {
    let throwaway = deck.dealCard();
}
outDiv.innerHTML += "<h3>Cards Left Test</h3>";
outDiv.innerHTML += `${deck.cards.length} cards left in the deck`;
console.assert(deck.cards.length == 34, "Number of Cards remaining in deck is incorrect");
