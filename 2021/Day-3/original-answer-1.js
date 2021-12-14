const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n');

// rate calculator
function rc(type) {
  let zeros = 0;
  let ones = 0;

  let decisionMap = {
    '0'() {
      zeros += 1;
    },
    '1'() {
      ones += 1;
    }
  }

  return {
    addByte(num) {
      decisionMap[num]();
    },
    // most common byte
    finalByteValue() {
      return type === 'g' ? 
      (zeros > ones ? '0' : '1') : 
      (zeros < ones ? '0' : '1');
    }
  }
}

const gammeCalculator = [];
const epsilonCalculator= [];

data.forEach((row) => {
  [...row].forEach((byte, index) => {
    if (gammeCalculator[index]) {
      gammeCalculator[index].addByte(byte);
    } else {
      gammeCalculator[index] = rc('g');
      gammeCalculator[index].addByte(byte);
    }

    if (epsilonCalculator[index]) {
      epsilonCalculator[index].addByte(byte);
    } else {
      epsilonCalculator[index] = rc('e');
      epsilonCalculator[index].addByte(byte);
    }
  })
});

const gammaRate = parseInt(gammeCalculator.map((rc) => {
  return rc.finalByteValue();
}).join(''), 2);

const epsilonRate = parseInt(epsilonCalculator.map((rc) => {
  return rc.finalByteValue();
}).join(''), 2);

const POWER_CONSUMPTION = gammaRate * epsilonRate;

console.log(POWER_CONSUMPTION);

// correct answer: 3901196
// correct answer for test data: 198


// While this solution worked, I was having a really hard time refactoring it to work with the second part of the
// day 3 challenge. So, I started over.