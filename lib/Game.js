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
      $(`.letter-card-div-${positionNum}`).css({"background-color": "tomato"});
    }
  }

  populatePuzzleBoard() {
    const puzzleWordCount = currentGame.puzzles[this.currentRound].number_of_words;
    let smallAnswerPosition = 14;
    let longAnswerPosition = 1;
    this.answerLettersArray.forEach((character) => {
      if (puzzleWordCount === 1 || puzzleWordCount === 2) {
        $(`.letter-card-div-${smallAnswerPosition}`).text(character).addClass('tomato').attr('data-value', character);
        currentGame.checkDelimiters(character, smallAnswerPosition);
        smallAnswerPosition++;
      }
      if (puzzleWordCount === 3 || puzzleWordCount === 4) {
        $(`.letter-card-div-${longAnswerPosition}`).text(character).addClass('tomato').attr('data-value', character);
        currentGame.checkDelimiters(character, longAnswerPosition);
        longAnswerPosition++;      }
    });
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