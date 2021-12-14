const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n').map((item) => parseInt(item));

let numberOfIncreases = 0;

let i = 0, j = 1, k = 2;

while (k < data.length) {
  const leftWindow = data[i] + data[j] + data[k];
  const rightWindow = data[i + 1] + data[j + 1] + data[k + 1];

  if (rightWindow > leftWindow) {
    numberOfIncreases += 1;
  }
  i += 1;
  j += 1;
  k += 1;
}

console.log(numberOfIncreases);