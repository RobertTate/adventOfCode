const fs = require('fs');
const { 
  returnRichBoards, 
  updateEachBoard,
  checkBoardsForAWinner,
  getUncheckedSum
} = require('./helpers');

const data = fs.readFileSync('data.txt', 'utf-8');
const boards = returnRichBoards(data);
const numbersDrawn = data.split('\n')[0].split(',');

for (let i = 0; i < numbersDrawn.length; i++) {
  const numberDrawn = numbersDrawn[i];
  updateEachBoard(numberDrawn, boards);

  const [anyWinners, boardIndex] = checkBoardsForAWinner(boards);

  if (anyWinners) {
    const winningBoard = boards[boardIndex];
    const sumOfUnchecked = getUncheckedSum(winningBoard);
    console.log(sumOfUnchecked * numberDrawn);
    break;
  };
};
