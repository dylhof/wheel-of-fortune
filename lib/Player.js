class Player {
  constructor(name) {
    this.playerName = name;
    this.roundScore = 0;
    this.totalScore = 0;
    this.isTurn = false;
  };

  addToRoundScore(spinValue) {
    this.roundScore += spinValue;
  };

  resetRoundScore() {
    // when someone guesses the answer to the puzzle correctly the currentGame triggers resetRound()
    this.roundScore = 0;
  };

  purchaseVowel() {
    this.roundScore -= 100;
  };

  sumTotalScore() {
    // if the player triggers the resetRound()
    // reset round calls this function ONLY for the player who guessed the puzzle correctly
    this.totalScore += this.roundScore;
  };

  updateTurn() {
    this.isTurn = !this.isTurn;
    console.log(`player ${this.playerName}`, this.isTurn);
    
  };

};

if(typeof module !== 'undefined') {
  module.exports = Player;
}