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

const calculateHighestCalorieElf = (elfsArray) => {
  let highestCalorieElf = 0;

  elfsArray.forEach((elf) => {
    const caloriesOfElfInQuestion = elf.reduce(((a, b ) => a+b), 0);
    if (caloriesOfElfInQuestion > highestCalorieElf) {
      highestCalorieElf = caloriesOfElfInQuestion;
    }
  });

  return highestCalorieElf;
};

const elfsArray = giveMeAnElfsArray();

const highestCalorieElf = calculateHighestCalorieElf(elfsArray);

console.log(highestCalorieElf);
