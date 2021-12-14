const fs = require('fs');

const data = fs.readFileSync('example-data.txt', 'utf-8').split('\n');

const numberConsolidator = (listOfBinaryNumbers, ruleFunc) => {
  const trackingArray = [];

  listOfBinaryNumbers.forEach((number) => {
    [...number].forEach((byte, index) => {
      if (!trackingArray[index]) {
        trackingArray[index] = {
          '0': 0,
          '1': 0
        }
      }
      trackingArray[index][byte] += 1;
    });
  })

  const finalNumber = trackingArray.map((item) => {
    return ruleFunc(item);
  })

  return parseInt(finalNumber.join(''), 2);
}

const gammaNumber = numberConsolidator(data, (item) => {
  return item['0'] > item['1'] ? 0 : 1
});

const epsilonNumber = numberConsolidator(data, (item) => {
  return item['0'] > item['1'] ? 1 : 0
});


const POWER_CONSUMPTION = gammaNumber * epsilonNumber;

console.log(POWER_CONSUMPTION);

// correct answer: 3901196
// correct answer for test data: 198