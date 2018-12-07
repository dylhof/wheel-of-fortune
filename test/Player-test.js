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

  it.skip('should reset the round score', function() {
    player.resetRoundScore();
    expect(player.roundScore).to.equal(0);
  });

    it.skip('should subtract $100 from round score', function() {
    player.purchaseVowel();
    expect(player.roundScore).to.equal();
  });

    it.skip('should add the round score to the total score', function() {
    player.sumTotalScore();
    expect(player.totalScore).to.equal();
  });

    it.skip('should toggle isTurn property boolean value', function() {
    expect(player.isTurn).to.equal(false);
    player.updateTurn();
    expect(player.isTurn).to.equal(true);
  });
});