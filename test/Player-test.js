const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
const Player = require('../lib/Player.js');
global.domUpdates = require('../domUpdates.js');

//chai.spy.on(global.domUpdates, ['methods here'], () => true);

describe('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player('Susan');
  });

  it('should have a name', function() {
    expect(player.playerName).to.equal('Susan');
  });

  it('should add spin value to roundScore', function() {
    player.roundScore = 500;
    player.addToRoundScore(500);
    expect(player.roundScore).to.equal(1000)
  })

  it('should reset the round score', function() {
    player.roundScore = 500;
    player.resetRoundScore();

    expect(player.roundScore).to.equal(0);
  });

  it('should subtract $100 from round score', function() {
    player.roundScore = 500;
    player.purchaseVowel();
    expect(player.roundScore).to.equal(400);
  });

  it('should add the round score to the total score', function() {
    player.roundScore = 500;
    player.totalScore = 500;
    player.sumTotalScore();
    expect(player.totalScore).to.equal(1000);
  });

    it('should toggle isTurn property boolean value', function() {
    expect(player.isTurn).to.equal(false);
    player.updateTurn();
    expect(player.isTurn).to.equal(true);
  });
});