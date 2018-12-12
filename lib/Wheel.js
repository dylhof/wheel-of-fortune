class Wheel {
  constructor() {
    this.wheelValues = [];
    this.currentSpin;
  };

  generateWheelValues() {
    // Return a new array with random selection of numbers and strings from the wheel property array of the data object
    for(let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 22)
      this.wheelValues.push(data.wheel[num]);
    };
    console.log(this.wheelValues);
  };

  spin() {
    let num = Math.floor(Math.random() * 6)
    this.currentSpin = this.wheelValues[num];
    domUpdates.updateSpinValue(this.currentSpin);
  };
};

if(typeof module !== 'undefined') {
  module.exports = Wheel;
}