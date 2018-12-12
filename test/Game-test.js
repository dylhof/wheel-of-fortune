const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
const Game = require('../lib/Game.js');
global.domUpdates = require('../domUpdates.js');


describe('Game', function() {
  var game;
  beforeEach(function() {
  chai.spy.on(global.domUpdates, ['displayWinner', 'updatePuzzleBoard', 'updatePuzzleCategory', 'addHiddenLetters', 'addPlayerTurnClass', 'removePlayerTurnClass', 'updateCurrentPlayer'], () => true);
  chai.spy.on(global.player, ['resetRoundScore'], () => true);
    game = new Game([{playerName: 'Betty', roundScore: 100, totalScore: 5000}, {playerName: 'Kate', roundScore: 50, totalScore: 2500}, {playerName: 'Marvin', roundScore: 0, totalScore: 100}], [{  
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
    chai.spy.restore(global.player);
  });

  it('should have players', function() {
    expect(game.players).to.deep.equal([{playerName: 'Betty', roundScore: 100, totalScore: 5000}, {playerName: 'Kate', roundScore: 50, totalScore: 2500}, {playerName: 'Marvin', roundScore: 0, totalScore: 100}]);
  });

  it.skip('should have a winner', function() {
  game.displayWinner();
  expect(game.winner).to.equal('Betty');
  });

  it('should start a new round', function() {
    expect(game.currentRound).to.equal(-1);
    game.startNewRound();
    expect(game.currentRound).to.equal(0);
  });

  it('should find the current correct answer and split it into an array of letters', function() {
    game.generatePuzzleArray(0);
    expect(game.currentAnswer).to.equal('armchair');
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






  
})