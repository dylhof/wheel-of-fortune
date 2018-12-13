class BonusWheel extends Wheel {
  constructor(wheelValues, currentSpin, bonusWheelValues) {
    super(wheelValues, currentSpin);
      this.bonusWheelValues = bonusWheelValues;
  };

  generateBonusWheelValues() {
    for(let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 22)
      if (data.wheel[num] === 'BANKRUPT') {
        console.log('bonus - bankrupt');
      } else if (data.wheel[num] === 'LOSE A TURN') {
        console.log('bonus - lose a turn');
      } else {
      this.wheelValues.push(data.wheel[num]);
      }
    };
  };

};

if(typeof module !== 'undefined') {
  module.exports = BonusWheel;
};