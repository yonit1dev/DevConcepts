const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A",
    initDeck() {
      for (let value of this.values.split(",")) {
        for (let suit of this.suits) {
          this.deck.push({ value, suit });
        }
      }
    },
    drawCard() {
      const cardDrawn = this.deck.pop();
      this.drawnCards.push(cardDrawn);

      return cardDrawn;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

const myDeck = makeDeck();

myDeck.initDeck();
console.log(myDeck.deck);

myDeck.drawCard();
console.log(myDeck.drawnCards);

myDeck.shuffle();
console.log(myDeck.deck);
