class Wheel {
  constructor() {
    this.wheelValues = [];
  };

  generateWheelValues() {
    // Return a new array with random selection of numbers and strings from the wheel property array of the data object
    for(let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 22)
      this.wheelValues.push(data.wheel[num]);
    };
  };

  spin() {

    // Choose a random value
    // Display a message depending on the value chosen
    domUpdates.updateSpinValueOnDom(500);
  };
};

if(typeof module !== 'undefined') {
  module.exports = Wheel;
}