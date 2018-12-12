const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
const Game = require('../lib/Game.js');
global.Player = require('../lib/Player.js');
global.Wheel = require('../lib/Wheel.js');
global.domUpdates = require('../domUpdates.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
  chai.spy.on(global.domUpdates, [
    'displayWinner',
    'updatePuzzleBoard',
    'updatePuzzleCategory',
    'addHiddenLetters',
    'addPlayerTurnClass', 
    'removePlayerTurnClass', 
    'updateCurrentPlayer', 
    'resetPuzzleBoard', 
    'updateRound', 
    'updatePlayerInfo',
    'showNewRoundInfo'
    ], () => true);
    player1 = new Player('Betty');
    player2 = new Player('Kate');
    player3 = new Player('Marvin');
    players = [player1, player2, player3];
    game = new Game(players, [{  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 8,
          first_word: 8, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Armchair',
        }]);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  });

  it('should have players', function() {

    expect(game.players).to.deep.equal([{playerName: 'Betty', roundScore: 0, totalScore: 0}, {playerName: 'Kate', roundScore: 0, totalScore: 0}, {playerName: 'Marvin', roundScore: 0, totalScore: 0}]);
  });

  it.skip('should have a winner', function() {
  game.displayWinner();
  expect(game.winner).to.equal('Betty');
  });

  it.skip('should start a new round', function() {
    player1.roundScore = 500;
    player2.roundScore = 600;
    player3.roundScore = 7000;
    expect(game.currentRound).to.equal(-1);
    game.startNewRound();
    expect(game.currentRound).to.equal(0);
    expect(player1.roundScore).to.equal(0);
    expect(player2.roundScore).to.equal(0);
    expect(player3.roundScore).to.equal(0);
    expect(domUpdates.showNewRoundInfo).to.have.been.called(1);
    expect(game.currentAnswer).to.equal('armchair');
  });

  it('should find the current correct answer and split it into an array of letters', function() {
    game.generatePuzzleArray(0);
    expect(game.currentAnswer).to.equal('armchair');
    expect(domUpdates.updatePuzzleBoard).to.have.been.called(1);
    expect(domUpdates.updatePuzzleCategory).to.have.been.called(1);
    expect(game.answerLettersArray).to.deep.equal([['a', 'r', 'm', 'c', 'h', 'a', 'i', 'r']]);
  });

  it('should add hidden letters once', function() {
    game.generatePuzzleArray(0);
    game.populatePuzzleBoard();
    expect(domUpdates.addHiddenLetters).to.have.been.called(8);
  });

  it('should update the current player', function() {
    game.currentPlayer = 0;
    game.updateCurrentPlayer();
    expect(game.currentPlayer).to.equal(1);
    game.updateCurrentPlayer();
    expect(game.currentPlayer).to.equal(2);
    game.updateCurrentPlayer();
    expect(game.currentPlayer).to.equal(0);
  });

  it.skip('should check the answer given by player 1 and, if correct, update the player 1 total score', function() {
    game.generatePuzzleArray(0);
    player1.totalScore = 0;
    player1.roundScore = 500;
    game.checkPlayerAnswer('Armchair');
    expect(player1.totalScore).to.equal(500)
  })

  it('should check the answer given by player 1 and, if wrong, update the current player', function() {
    game.generatePuzzleArray(0);
    player1.totalScore = 0;
    player1.roundScore = 500;
    game.checkPlayerAnswer('blueArmchair');
    expect(game.currentPlayer).to.equal(1)
  })

  it('should check letter answer', function() {
    game.checkLetterAnswer('m');
    player1.roundScore = 0;

    
  })



  
})