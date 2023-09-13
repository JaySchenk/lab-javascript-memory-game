class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    };
    const cardsClone = JSON.parse(JSON.stringify(this.cards));
    for (let i = cardsClone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsClone[i], cardsClone[j]] = [cardsClone[j], cardsClone[i]];
    }
    this.cards = cardsClone;
    return cardsClone;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
  }
}
