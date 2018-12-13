const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
global.Wheel = require('../lib/Wheel.js');
global.data = require('../lib/data.js');
global.domUpdates = require('../domUpdates.js');
const BonusWheel = require('../lib/BonusWheel.js');

describe('BonusWheel', function() {
  var bonuswheel;
  beforeEach(function() {
    chai.spy.on(global.domUpdates, ['updateSpinValue'], () => true);
    bonuswheel = new BonusWheel();
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  });

  it('should start with an empty array', function() {
    expect(bonuswheel.wheelValues).to.deep.equal([]);
  });

  it('should have an array of bonus wheel values', function() {
    bonuswheel.generateBonusWheelValues();
    expect(bonuswheel.wheelValues).to.have.lengthOf(6);
  });

  it('should choose a random value from the bonus wheel array and display it', function() {
    bonuswheel.spin();
    expect(domUpdates.updateSpinValue).to.have.been.called(1);
  });


  it('should generate different bonus wheel arrays each time', function() {
    let newbonuswheel = new BonusWheel();
    bonuswheel.generateBonusWheelValues();
    newbonuswheel.generateBonusWheelValues();
    expect(bonuswheel.wheelValues).to.not.equal(newbonuswheel.wheelValues);
  });
});