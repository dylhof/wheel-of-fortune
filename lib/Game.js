class Game {
  constructor(players, puzzles) {
    this.answerLettersArray = [];
    this.currentAnswer = '';
    this.currentPlayer = 0;
    this.currentRound = -1;
    this.players = players;
    this.puzzles = puzzles;
    this.winner = '';
  };

  displayWinner() {
    // At the end of round 4, check for highest grand total among players
    // Display the name of the winner property
  };

  generatePuzzleArray(currentRound) {
    this.currentAnswer = currentGame.puzzles[currentRound].correct_answer.toLowerCase();
    domUpdates.updatePuzzleBoardOnDom(this.currentAnswer);
    domUpdates.updatePuzzleCategoryOnDom(this.puzzles[currentRound].category);
    this.answerLettersArray = this.currentAnswer.split('');
    // Check the puzzles array index and match the current round number.
    // Generate the board for the puzzle at that index.
    // call domUpdates.updatePuzzleBoarnOnDom(whatever the current puzzle is)
    // call domUpdates.updatePuzzleCategoryOnDom(currentPuzzle)
  };

  checkDelimiters(character, positionNum) {
    if (character === '-') {
      $(`.letter-card-div-${positionNum}`).css({"color": "#000", "background-color": "#FFF"});
    }
    if (character === ' ') {
      $(`.letter-card-div-${positionNum}`).addClass('white');
    }
    // check for hyphens
      // if hyphen: show it on the board
        // check for spaces
      // if space: give it a class that makes it tomato
        // put it on a new line
  }

  populatePuzzleBoard() {
    // check # of words to determine which row to start on
    const puzzleWordCount = currentGame.puzzles[this.currentRound].number_of_words;
    let num = 14;
    console.log('Puzzle Word Count: ',puzzleWordCount);
    this.answerLettersArray.forEach((character) => {
      if (puzzleWordCount === 1 || puzzleWordCount === 2) {
        $(`.letter-card-div-${num}`).text(character).addClass('tomato').attr('data-value', character);
        currentGame.checkDelimiters(character, num);
        num++;
      }
      if (puzzleWordCount === 3 || puzzleWordCount === 4) {
        currentGame.checkDelimiters(character);
      }
    });
      // 1 word, 2 word = row 2 

        // iterate through each letter in answerLettersArray
          // each letter: 
            // call checkDelimiters()
            // take the value of the letter and display in the correct div
            // give it a style
            // give it a data attribute
      // 3 word, 4 word = row 1 
        // iterate through each letter in answerLettersArray
          // each letter: 
            // call checkDelimiters()
            // take the value of the letter and display in the correct div
            // give it a style
            // give it a data attribute
  }




  checkPlayerAnswer(guess) {
    if (guess.toLowerCase() === this.currentAnswer.toLowerCase()) {
      this.players[this.currentPlayer].sumTotalScore()
      this.startNewRound();
    } else {
      currentGame.updateCurrentPlayer();
    }
  }

  checkLetterAnswer(letter) {
    //in the following conditional we will need to also check if the letter has already been guessed
    if (this.answerLettersArray.includes(letter)) {
      this.players[this.currentPlayer].addToRoundScore(newRoundWheel.currentSpin);
      console.log(this.players[this.currentPlayer].roundScore);
      domUpdates.updateRoundScoreOnDom(this.currentPlayer, this.players[this.currentPlayer].roundScore);
    } else {
      this.updateCurrentPlayer();
    }
  }

  updateCurrentPlayer() {
    if (this.currentPlayer === 2) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    domUpdates.updateCurrentPlayerOnDom(this.players[this.currentPlayer].playerName);
  }

// a new round is only triggerd when a player clicks the solve puzzle button and the answer they input is === to the correct answer in the current puzzle.
  startNewRound() {
    players.forEach((player) => {
      player.resetRoundScore();
    });
    // Check the current round to see if we are on round 4
    // Call the resetRoundScore() method from the Player object
    // Create a new wheel 
    newRoundWheel = new Wheel();
    // Call the generateWheelValues() method from the Wheel object
    newRoundWheel.generateWheelValues();
    this.currentRound++;
    domUpdates.updateRoundOnDom(this.currentRound + 1);
    domUpdates.updateCurrentPlayerOnDom(this.players[this.currentPlayer].playerName);
    domUpdates.updatePlayerInfoOnDom(this.players);
    currentGame.generatePuzzleArray(this.currentRound);
    currentGame.populatePuzzleBoard();
  };

  //vowelCheck()

};

if(typeof module !== 'undefined') {
  module.exports = Game;
}