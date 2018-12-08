const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;
const Wheel = require('../lib/Wheel.js');
global.domUpdates = require('../domUpdates.js');
const data = require('../lib/data.js')

//chai.spy.on(global.domUpdates, ['methods here'], () => true);

describe('Wheel', function() {
  var wheel;
  beforeEach(function() {
    wheel = new Wheel();
  });

  it('should have an empty array', function() {
    expect(wheel.wheelValues).to.deep.equal([]);
  });

  it.skip('should have an array of wheel values', function() {
    wheel.generateWheelValues()
    expect(wheel.wheelValues.length).to.equal(6);
  });

  it.skip('should choose a random value', function() {
    wheel.spin()
    expect().to.equal();
    //Maybe spy on this to see if it is triggering a dom update? 
    //Possibly testing if the random value is within a range?
  });
  
})