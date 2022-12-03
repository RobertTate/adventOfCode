const fs = require('fs');

const pointMap = {
  X: { A: 4, B: 1, C: 7 },
  Y: { A: 8, B: 5, C: 2 },
  Z: { A: 3, B: 9, C: 6 }
};

const calculateRound = (choices) => {
  const playerChoice = choices[2];
  const opponentChoice = choices[0];

  return pointMap[playerChoice][opponentChoice];
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

