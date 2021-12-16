const returnRichBoards = (data) => {
  const rawBoards = data.split('\n\n');
  rawBoards.shift();

  const richBoards = [];

  rawBoards.forEach((board) => {
    richBoards.push(board.split('\n').map((row) => {
      return row.replace(/^\s+/, '').split(/\s+/).map((number) => {
        return {
          value: number,
          checked: false
        }
      });
    }));
  });

  return richBoards;
};

const updateEachBoard = (numberDrawn, boards) => {
  boards.forEach((board) => {
    board.forEach((row) => {
      row.forEach((number) => {
        if (number.value === numberDrawn) {
          number.checked = true;
        };
      });
    });
  });
};

const checkForWinningRow = (board) => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const isWinningRow = row.every(number => number.checked === true);
    if (isWinningRow) {
      return true;
    }
  };
  return false;
};

const checkForWinningColumn = (board) => {
  let columnIndex = 0;

  while (columnIndex < 5) {
    let isWinningColumn = 0;
    for (let i = 0; i < board.length; i++) {
      const row = board[i];

      if (row[columnIndex].checked === true) {
        isWinningColumn += 1;
      }
    }
    if (isWinningColumn === 5) {
      return true;
    }
    columnIndex += 1;
  }
  return false;
}


const checkBoardsForAWinner = (boards) => {
  for (let i = 0; i < boards.length; i++) {
    const board = boards[i];
    const hasWinningRow = checkForWinningRow(board);
    const hasWinningColumn = checkForWinningColumn(board);

    if (hasWinningRow || hasWinningColumn) {
      return [true, i];
    };
  };
  return [false, undefined];
};

const getUncheckedSum = (winningBoard) => {
  let uncheckedSum = 0;

  winningBoard.forEach((row) => {
    row.forEach((number) => {
      if (number.checked === false) {
        uncheckedSum += Number(number.value);
      };
    });
  });

  return uncheckedSum;
}

module.exports = { 
  returnRichBoards, 
  updateEachBoard,
  checkBoardsForAWinner,
  getUncheckedSum
}