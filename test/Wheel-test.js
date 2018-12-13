const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
const Wheel = require('../lib/Wheel.js');
global.domUpdates = require('../domUpdates.js');
const data = require('../lib/data.js')


describe('Wheel', function() {
  var wheel;
  beforeEach(function() {
    chai.spy.on(global.domUpdates, ['updateSpinValue'], () => true);
    wheel = new Wheel();
  });
  afterEach(function() {
    chai.spy.restore(global.domUpdates);
  });

  it('should start with an empty array', function() {
    expect(wheel.wheelValues).to.deep.equal([]);
  });

  it('should have an array of wheel values', function() {
    wheel.generateWheelValues();
    expect(wheel.wheelValues).to.have.lengthOf(6);
  });

  it('should choose a random value from the wheel array and display it', function() {
    wheel.spin();
    expect(domUpdates.updateSpinValue).to.have.been.called(1);
  });
})