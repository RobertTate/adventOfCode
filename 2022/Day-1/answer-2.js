const fs = require('fs');

const giveMeAnElfsArray = () => {
  const data = fs.readFileSync('data.txt', 'utf-8').split('\n');
  data.pop();
  const dataConvertedToNumbers = data.map((line) => Number(line));
  let individualElfArray = [];
  const elfsArray = [];

  dataConvertedToNumbers.forEach((number) => {
    if (number) {
      individualElfArray.push(number);
    } else {
      elfsArray.push(individualElfArray);
      individualElfArray = [];
    }
  })

  return elfsArray;
};

const calculateThreeHighestCalorieElfs = (elfsArray) => {
  const calculatedAndSortedElfsArray = elfsArray.map((elf) => {
    return elf.reduce(((a, b ) => a+b), 0);
  }).sort((a, b) => b - a);

  const [a, b, c] = calculatedAndSortedElfsArray;

  return a + b + c;
};

const elfsArray = giveMeAnElfsArray();

const threeHighestCalorieElfs = calculateThreeHighestCalorieElfs(elfsArray);

console.log(threeHighestCalorieElfs);
