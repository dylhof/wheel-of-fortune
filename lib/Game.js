class Game {
  constructor(players, puzzles) {
    this.answerLettersArray = [];
    // this.bonusWheelValues = [];
    this.currentAnswer = '';
    this.currentPlayer = 0;
    this.currentRound = 2;
    this.highestScore = 0;
    this.newRoundWheel = [];
    this.players = [
    new Player($('#player1').val()), 
    new Player($('#player2').val()), 
    new Player($('#player3').val())
    ];
    this.puzzles = [];
    this.winner = '';
  };

  checkDelimiters(character, positionOnBoard) {
    if (character === '-') {
      domUpdates.showDelimiters(positionOnBoard);
    }
  };

  checkLetterAnswer(letter) {
    if (this.currentAnswer.includes(letter)) {
      this.players[this.currentPlayer].addToRoundScore(this.newRoundWheel.currentSpin);
      if (this.currentRound === 4) {
        this.players.forEach((player) => {
        player.resetRoundScore();
        });
      }
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdates.showCorrectGuessLetter(letter);
    } else {
      this.updateCurrentPlayer();
    }
  };
  
  checkPlayerAnswer(guess) {
    if (guess.toLowerCase() === this.currentAnswer.toLowerCase()) {
      this.players[this.currentPlayer].sumTotalScore()
      this.startNewRound();
    } else {
      this.updateCurrentPlayer();
    }
  };
  
  checkVowelAnswer(letter){
    if (this.currentAnswer.includes(letter)) {
      this.players[this.currentPlayer].purchaseVowel();
      if (this.currentRound === 4) {
        this.players.forEach((player) => {
        player.resetRoundScore();
        });
      }
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdates.showCorrectGuessLetter(letter);
    } else {
      this.players[this.currentPlayer].purchaseVowel();
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore)
      this.updateCurrentPlayer();
    }
  };
  
  displayWinner(winner) {
    domUpdates.displayWinnerScreen(winner);
  };

  generatePuzzleArray(currentRound) {
    this.currentAnswer = this.puzzles[currentRound].correct_answer.toLowerCase();
    domUpdates.updatePuzzleCategory(this.puzzles[currentRound].category);
    const puzzleWordArray = this.currentAnswer.split(' ');
    this.answerLettersArray = puzzleWordArray.map((word) => {
      return word.split('');
    });
  };

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
          this.checkDelimiters(character, rowTwo);
          rowTwo++;
        });
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
        }); 
      }; 
    });
  };

  selectPuzzles() {
  let num;
  for(let i = 0; i < 5; i++) {
    if (this.puzzles.length === 0){
      num = Math.floor(Math.random() * 24)
      this.puzzles.push(data.puzzles.one_word_answers.puzzle_bank[num])
    } else if (this.puzzles.length === 1){
      num = Math.floor(Math.random() * 24)
      this.puzzles.push(data.puzzles.two_word_answers.puzzle_bank[num])
    } else if (this.puzzles.length === 2){
      num = Math.floor(Math.random() * 24)
      this.puzzles.push(data.puzzles.three_word_answers.puzzle_bank[num])
    } else if (this.puzzles.length === 3){
      num = Math.floor(Math.random() * 24)
      this.puzzles.push(data.puzzles.four_word_answers.puzzle_bank[num])
    } else if (this.puzzles.length === 4){
      num = Math.floor(Math.random() * 24)
      this.puzzles.push(data.puzzles.two_word_answers.puzzle_bank[num])
    }
  }  
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
      });
    });
  };

  startBonusRound() {
    const totalScoresArray = this.players.map((player) => {
      return player.totalScore;
    });
    this.highestScore = totalScoresArray.sort((a, b) => {
      return b - a;
    })[0];

    const bonusPlayer = this.players.filter((player) => {
      return this.highestScore === player.totalScore; 
    })[0];
    currentGame.showBonusLetters();
  }; 

  startNewRound() {
    this.currentRound++;
    this.players.forEach((player) => {
      player.resetRoundScore();
    });
    domUpdates.showNewRoundInfo((this.currentRound + 1), this.players, this.currentPlayer); 
    if (this.currentRound === 4) {
      this.bonusWheel = new BonusWheel();
      this.bonusWheel.generateBonusWheelValues();
      this.generatePuzzleArray(this.currentRound);
      this.populatePuzzleBoard(); 
      this.startBonusRound(); 
    } else if (this.currentRound > 4) {
      domUpdates.displayWinnerScreen(currentGame.players[currentGame.currentPlayer].playerName);
    } else {
      this.newRoundWheel = new Wheel();
      this.newRoundWheel.generateWheelValues();
      this.generatePuzzleArray(this.currentRound);
      this.populatePuzzleBoard();
    } 
    console.log(this.currentAnswer);
  };

  updateCurrentPlayer() {
    domUpdates.removePlayerTurnClass(this.currentPlayer);
    if (this.currentPlayer === 2) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
  domUpdates.addPlayerTurnClass(this.currentPlayer);
  };
};

if(typeof module !== 'undefined') {
  module.exports = Game;
};