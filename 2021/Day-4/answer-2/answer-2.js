const fs = require('fs');
const {
  returnRichBoards,
  updateEachBoard,
  checkBoardsForWinners,
  getUncheckedSum
} = require('./helpers');

const data = fs.readFileSync('data.txt', 'utf-8');
const boards = returnRichBoards(data);
const numbersDrawn = data.split('\n')[0].split(',');

let lastWinningBoard;
let lastNumberDrawn;

for (let i = 0; i < numbersDrawn.length; i++) {
  const numberDrawn = numbersDrawn[i];
  updateEachBoard(numberDrawn, boards);
  
  checkBoardsForWinners(boards).forEach((winnerIndex) => {
    lastWinningBoard = boards[winnerIndex];;
    lastNumberDrawn = numberDrawn;
    boards.splice(winnerIndex, 1);
  });
};

const sumOfUnchecked = getUncheckedSum(lastWinningBoard);
console.log(sumOfUnchecked * Number(lastNumberDrawn));
