class Player {
  constructor(name) {
    this.playerName = name;
    this.roundScore = 0;
    this.totalScore = 0;
    this.isTurn = false;
  };

  addToRoundScore() {
    // Adds the spin value to round score
  };

  resetRoundScore() {
    // Resets the round score to 0
  };

  purchaseVowel() {
    // Subtracts $100 from round score
  };

  sumTotalScore() {
    // Adds the round score to total score
  };

  updateTurn() {
    //updates isTurn
  };

};

if(typeof module !== 'undefined') {
  module.exports = Player;
}