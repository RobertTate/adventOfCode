const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n');

const numberConsolidator = (data, ruleFunc) => {
  let listOfBinaryNumbers = JSON.parse(JSON.stringify(data));

  const trackingArray = [];

  for (let i = 0; i < 12; i++) {
    if (listOfBinaryNumbers.length === 1) {
      break;
    }

    listOfBinaryNumbers.forEach((number) => {
      if (!trackingArray[i]) {
        trackingArray[i] = {
          '0': 0,
          '1': 0
        }
      }
      trackingArray[i][number[i]] += 1;
    });

    listOfBinaryNumbers = listOfBinaryNumbers.filter((number) => {
      return ruleFunc(trackingArray, number, i);
    });
  }

  const finalNumber = listOfBinaryNumbers[0];

  return parseInt(finalNumber, 2);
}


const oxygenGeneratorNumber = numberConsolidator(data, (trackingArray, number, i) => {
  let zeros = trackingArray[i]['0'];
  let ones = trackingArray[i]['1'];
  let byte = number[i];

  if (zeros > ones) {
    return byte === '0';
  } else if (zeros < ones)  {
    return byte === '1';
  } else {
    return byte === '1';
  }
});


const CO2ScrubberNumber = numberConsolidator(data, (trackingArray, number, i) => {
  let zeros = trackingArray[i]['0'];
  let ones = trackingArray[i]['1'];
  let byte = number[i];

  if (zeros > ones) {
    return byte === '1';
  } else if (zeros < ones)  {
    return byte === '0';
  } else {
    return byte === '0';
  }
});


const LIFE_SUPPORT_RATING = oxygenGeneratorNumber * CO2ScrubberNumber;

console.log(LIFE_SUPPORT_RATING);

// Correct! The answer for me was 4412188.