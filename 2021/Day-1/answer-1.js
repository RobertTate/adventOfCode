const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n').map((item) => parseInt(item));

let numberOfIncreases = 0;

for (let i = 0 ; i < data.length; i++) {
  let j = i + 1

  if (data[j] > data[i]) {
    numberOfIncreases += 1;
  }
}

console.log(numberOfIncreases);