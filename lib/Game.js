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
x
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
    });
  };

  checkDelimiters(character, positionNum) {
    if (character === '-') {
      $(`.letter-card-div-${positionNum}`).children().removeClass('hidden');
      $(`.letter-card-div-${positionNum}`).css({"background-color": "#27A067"});
    }
    if (character === '\'') {
      $(`.letter-card-div-${positionNum}`).children().removeClass('hidden');
      $(`.letter-card-div-${positionNum}`).css({"background-color": "#27A067"});
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
          $(`.letter-card-div-${rowTwo}`).append(`<p class="hidden" data-value=${character}>${character}</p>`).addClass('puzzle-card');
          currentGame.checkDelimiters(character, rowTwo);
          rowTwo++;
        }) 
      } else if (numberOfWords > 1) {
        word.forEach((character) => {
          if (i === 0) {
            $(`.letter-card-div-${rowOne}`).append(`<p class="hidden" data-value=${character}>${character}</p>`).addClass('puzzle-card');
            rowOne++;
          } else if (i === 1) {
            $(`.letter-card-div-${rowTwo}`).append(`<p class="hidden" data-value=${character}>${character}</p>`).addClass('puzzle-card');
            rowTwo++;
          } else if (i === 2) {
            $(`.letter-card-div-${rowThree}`).append(`<p class="hidden" data-value=${character}>${character}</p>`).addClass('puzzle-card');
            rowThree++;
          } else if (i === 3) {
            $(`.letter-card-div-${rowFour}`).append(`<p class="hidden" data-value=${character}>${character}</p>`).addClass('puzzle-card');
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
    if (this.currentAnswer.includes(letter)) {
      this.players[this.currentPlayer].addToRoundScore(newRoundWheel.currentSpin);
      domUpdates.updateRoundScoreOnDom(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      $(`[data-value = ${letter}]`).removeClass('hidden');
    } else {
      this.updateCurrentPlayer();
      //add it as a guessed letter
    }
    // reset input form 
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
    this.currentRound++;
    players.forEach((player) => {
      player.resetRoundScore();
    });
    $('.letter-card-div').removeClass('puzzle-card');
    $('.letter-card-div').empty();
    domUpdates.updateRoundOnDom(this.currentRound + 1);
    domUpdates.updatePlayerInfoOnDom(this.players);
    currentGame.generatePuzzleArray(this.currentRound);
    currentGame.populatePuzzleBoard();
    if (this.currentRound === 4) { 
      this.currentPlayer = 0;
      currentGame.startBonusRound(); 
    } else {
      newRoundWheel = new Wheel();
      newRoundWheel.generateWheelValues();
      domUpdates.updateCurrentPlayerOnDom(this.players[this.currentPlayer].playerName);
    } 
  };

  startBonusRound() {
    this.players = this.players.sort((playerA, playerB) => {
      return playerB.totalScore - playerA.totalScore;
    });
    console.log(this.players, this.currentPlayer);
    currentGame.showBonusLetters();
    currentGame.showBonusOptions();
  } 

  showBonusLetters() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let skipConsonant = false;
    this.answerLettersArray.forEach((word) => {
      word.forEach((character) => {
        if (!vowels.includes(character)) {
          if (skipConsonant === false) {
            skipConsonant = !skipConsonant;
          } else {
            currentGame.checkLetterAnswer(character);
            skipConsonant = !skipConsonant;
          }
        }
      })
    })
  }

  showBonusOptions() {
    console.log('fire')
  }


};

if(typeof module !== 'undefined') {
  module.exports = Game;
}



