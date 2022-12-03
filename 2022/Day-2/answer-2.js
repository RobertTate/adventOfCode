const fs = require('fs');

const pointMap = {
  A: { X: 3, Y: 4, Z: 8},
  B: { X: 1, Y: 5, Z: 9},
  C: { X: 2, Y: 6, Z: 7}
}

const calculateRound = (choices) => {
  const playerChoice = choices[2];
  const opponentChoice = choices[0];

  return pointMap[opponentChoice][playerChoice];
};

const calculateTotalScore = (strategyGuide) => {
  const totalScore = strategyGuide.reduce(((acc, curr) => {
    return acc + calculateRound(curr);
  }), 0);

  return totalScore;
};

const strategyGuide = fs.readFileSync('data.txt', 'utf-8').split('\n');
strategyGuide.pop();

const totalScore = calculateTotalScore(strategyGuide);

console.log(totalScore);
