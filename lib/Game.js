class Game {
  constructor(players, puzzles) {
    this.currentRound = 0;
    this.players = players;
    this.puzzles = puzzles;
    this.winner = '';
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
    // Instantiate a new Wheel object
    // Call the generateWheelValues() method from the Wheel object
    // Increment the current round value
  };

};