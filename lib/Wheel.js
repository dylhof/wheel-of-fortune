class Wheel {
  constructor() {
    this.numberOfValues = 6;
    this.wheelValues = [];
  };

  generateWheelValues() {
    console.log('fire');
    // Return a new array with random selection of numbers and strings from the wheel property array of the data object
    for(let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 22)
      this.wheelValues.push(data.wheel[num]);
    };
    console.log(this.wheelValues);
  };

  spin() {
    // Choose a random value
    // Display a message depending on the value chosen
  };
};

if(typeof module !== 'undefined') {
  module.exports = Wheel;
}