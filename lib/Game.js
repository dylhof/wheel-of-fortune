class Game {
  constructor(players, puzzles) {
    this.answerLettersArray = [];
    this.currentAnswer = '';
    this.currentPlayer = 0;
    this.currentRound = -1;
    this.highestScore = 0;
    this.players = players;
    this.puzzles = puzzles;
    this.winner = '';
  };

  displayWinner() {
    // At the end of round 4 (5), check for highest grand total among players
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

  checkDelimiters(character, positionOnBoard) {
    if (character === '-') {
      domUpdates.showDelimiters(positionOnBoard);
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
          domUpdates.addHiddenLetters(character, rowTwo);
          currentGame.checkDelimiters(character, rowTwo);
          rowTwo++;
        }) 
      } else if (numberOfWords > 1) {
        word.forEach((character) => {
          if (i === 0) {
            domUpdates.addHiddenLetters(character, rowOne);
            rowOne++;
          } else if (i === 1) {
            domUpdates.addHiddenLetters(character, rowTwo);
            rowTwo++;
          } else if (i === 2) {
            domUpdates.addHiddenLetters(character, rowThree);
            rowThree++;
          } else if (i === 3) {
            domUpdates.addHiddenLetters(character, rowFour);
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


      // firing more than once from showBonusLetters(). conditional may keep it away from bonus round?
      this.players[this.currentPlayer].addToRoundScore(newRoundWheel.currentSpin);

      // reset the round score if currentround === 4 ????????
      if (this.currentRound === 4) {
        this.players.forEach((player) => {
        player.resetRoundScore();
        });
      }
      // OMG IT ACTUALLY WORKS

      domUpdates.updateRoundScoreOnDom(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdates.showCorrectGuessLetter(letter);
    } else {
      this.updateCurrentPlayer();
      //add it as a guessed letter
    }
    // reset input form 
  }

  updateCurrentPlayer() {
    domUpdates.removePlayerTurnClassOnDom(this.currentPlayer);
    if (this.currentPlayer === 2) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    domUpdates.updateCurrentPlayerOnDom(this.players[this.currentPlayer].playerName);
    
    domUpdates.addPlayerTurnClassOnDom(this.currentPlayer);
  }

  startNewRound() {
    this.currentRound++;
    players.forEach((player) => {
      player.resetRoundScore();
    });
    domUpdates.resetPuzzleBoard();
    domUpdates.updateRoundOnDom(this.currentRound + 1);
    domUpdates.updatePlayerInfoOnDom(this.players);
    domUpdates.addPlayerTurnClassOnDom(this.currentPlayer);
    currentGame.generatePuzzleArray(this.currentRound);
    currentGame.populatePuzzleBoard();
    if (this.currentRound === 4) { 
      currentGame.startBonusRound(); 
    } else {
      newRoundWheel = new Wheel();
      newRoundWheel.generateWheelValues();
      domUpdates.updateCurrentPlayerOnDom(this.players[this.currentPlayer].playerName);
    } 
  };

  startBonusRound() {
    const totalScoresArray = this.players.map((player) => {
      return player.totalScore;
    });
    this.highestScore = totalScoresArray.sort((a, b) => {
      return b - a;
    })[0];

    // i want the PLAYER's index in the players array that this highestScore number belongs to

    const bonusPlayer = this.players.filter((player) => {
      // return the highest score if its equal to this player's total score
      return this.highestScore === player.totalScore; 
    })[0];

    console.log('player who owns that highest score: ', bonusPlayer);


    







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
            // i think this is where its firing more than once, because there's two words
            // so the round score is the players round score + 2 more of their round score
            currentGame.checkLetterAnswer(character);
            skipConsonant = !skipConsonant;
          }
        }
      })
    })
    // only add round scors this ONCE for bonus rounds.... foreach calling twice (two words)
  }

  showBonusOptions() {
    // console.log('fire')
  }


};

if(typeof module !== 'undefined') {
  module.exports = Game;
}



