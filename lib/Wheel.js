class Wheel {
  constructor() {
    this.wheelValues = [];
    this.currentSpin;
  };

  generateWheelValues() {
    for(let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 22)
      this.wheelValues.push(data.wheel[num]);
    };
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