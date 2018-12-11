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
    const puzzleWordArray = this.currentAnswer.split(' ');
    this.answerLettersArray = puzzleWordArray.map((word) => {
      return word.split('');
    })
   
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
      //move position num to the next row
    }
  }

  populatePuzzleBoard() {
    let numberOfWords = this.answerLettersArray.length;
    // for spacing out characters: we could have conditionals that check whether the word is short 
    // if its short: we can reassign the rowX variable to be a value that is greater
    let rowOne = 1;
    let rowTwo = 15;
    let rowThree = 29;
    let rowFour = 43;

    if (this.answerLettersArray[0].length < 4) {
      console.log(this.answerLettersArray[0].length)
      rowTwo = 6;
    }
    else if (this.answerLettersArray[0].length > 6) {
      console.log(this.answerLettersArray[0].length)
      rowTwo = 2;
    }
    else if (this.answerLettersArray[0].length === 14) {
      console.log(this.answerLettersArray[0].length)
      rowTwo = 1;
    }

    this.answerLettersArray.forEach((word, i) => {
      if (numberOfWords === 1) {
        word.forEach((character) => {
          $(`.letter-card-div-${rowTwo}`).text(character).addClass('tomato').attr('data-value', character);
          rowTwo++;
        }) 
      } else if (numberOfWords > 1) {
        word.forEach((character) => {
          if (i === 0) {
            $(`.letter-card-div-${rowOne}`).text(character).addClass('tomato').attr('data-value', character);
            rowOne++;
          } else if (i === 1) {
            $(`.letter-card-div-${rowTwo}`).text(character).addClass('tomato').attr('data-value', character);
            rowTwo++;
          } else if (i === 2) {
            $(`.letter-card-div-${rowThree}`).text(character).addClass('tomato').attr('data-value', character);
            rowThree++;
          } else if (i === 3) {
            $(`.letter-card-div-${rowFour}`).text(character).addClass('tomato').attr('data-value', character);
            rowFour++;
          }
        }) 
      } 
    })
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
    $('.letter-card-div').text('').removeClass('tomato');
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