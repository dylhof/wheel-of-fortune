class Player {
  constructor(name) {
    this.playerName = name;
    this.roundScore = 0;
    this.totalScore = 0;
  };

  addToRoundScore(spinValue) {
    if (spinValue === 'BANKRUPT') {
      this.resetRoundScore();
      currentGame.updateCurrentPlayer();
    } else if(spinValue === 'LOSE A TURN') {
      currentGame.updateCurrentPlayer();
    } else { 
      this.roundScore += spinValue;
    }  
  };

  resetRoundScore() {
    this.roundScore = 0;
  };

  purchaseVowel() {
    this.roundScore -= 100;
  };

  sumTotalScore() {
    this.totalScore += this.roundScore;
  };

};

if(typeof module !== 'undefined') {
  module.exports = Player;
}