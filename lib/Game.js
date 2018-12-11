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
    let numberOfWords = this.answerLettersArray.length;
    let rowOne = 3;
    let rowTwo = 18;
    let rowThree = 33;
    let rowFour = 45;

    if (this.answerLettersArray[0].length < 7 && numberOfWords === 1) {
      rowTwo = 20;
    }
    else if (this.answerLettersArray[0].length <= 12) {
      rowTwo = 17;
    }
    else if (this.answerLettersArray[0].length === 14) {
      rowTwo = 15;
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