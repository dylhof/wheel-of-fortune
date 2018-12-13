class BonusWheel extends Wheel {
  constructor(wheelValues, currentSpin) {
    super(wheelValues, currentSpin);
    // this.bonusWheelValues = bonusWheelValues;
  }

  generateBonusWheelValues() {
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 22)
      if (data.wheel[num] === 'BANKRUPT') {
        i--;
      } else if (data.wheel[num] === 'LOSE A TURN') {
        i--;
      } else {
        this.wheelValues.push(data.wheel[num] * 2);
      }
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}