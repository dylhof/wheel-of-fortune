const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
const Player = require('../lib/Player.js');
global.domUpdates = require('../domUpdates.js');

describe('Player', function() {
  var player;
  beforeEach(function() {
    player = new Player('Susan');
    player.roundScore = 500;
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  });

  it('should have a name', function() {
    expect(player.playerName).to.equal('Susan');
  });

  it('should add spin value to roundScore', function() {
    player.addToRoundScore(500);
    expect(player.roundScore).to.equal(1000);
  });

  it('should reset the round score', function() {
    player.resetRoundScore();
    expect(player.roundScore).to.equal(0);
  });

  it('should subtract $100 from round score', function() {
    player.purchaseVowel();
    expect(player.roundScore).to.equal(400);
  });

  it('should add the round score to the total score', function() {
    player.totalScore = 500;
    player.sumTotalScore();
    expect(player.totalScore).to.equal(1000);
  });

});


