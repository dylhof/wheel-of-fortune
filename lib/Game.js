class Game {
  constructor(players, puzzles) {
    this.currentRound = 0;
    this.players = players;
    this.puzzles = puzzles;
    this.winner = '';
    this.currentPlayer = 0;
  };

  displayWinner() {
    // At the end of round 4, check for highest grand total among players
    // Display the name of the winner property
  };

  generatePuzzleBoard() {
    // Check the puzzles array index and match the current round number.
    // Generate the board for the puzzle at that index.
  };

  startNewRound() {
    // Check the current round to see if we are on round 4
    // Call the resetRoundScore() method from the Player object
    // Create a new wheel 
    newRoundWheel = new Wheel();
    // Call the generateWheelValues() method from the Wheel object
    newRoundWheel.generateWheelValues();
    // Increment the current round value
  };

};

if(typeof module !== 'undefined') {
  module.exports = Game;
}