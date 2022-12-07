const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').replace(/\r/g, '').split('\n');
data.pop();

const cratesData = data.splice(0, 10).splice(0, 8);

const getCratesArray = (cratesData) => {
  const cratesArray = []

  cratesData.forEach(crate => {
    let j = 0;
    for (let i = 1; i < crate.length; i += 4) {
      if (!cratesArray[j]) {
        cratesArray[j] = [];
      }

      if (crate[i].match(/[A-Z]/i)) {
        cratesArray[j].unshift(crate[i]);
      }

      j += 1;
    }
  });

  return cratesArray;
}

const rearrangeCrates = (crates, data) => {
  data.forEach((instruction) => {
    const [amountToMove, fromColumnIndex, toColumnIndex] = instruction.replace(/[^0-9 ]/g, '')
      .split(' ')
      .filter(str => Boolean(str))
      .map(str => Number(str))

    const fromColumn = crates[fromColumnIndex - 1];
    const toColumn = crates[toColumnIndex - 1];

    for (let i = 0; i < amountToMove; i++) {
      const crateToMove = fromColumn.pop();
      toColumn.push(crateToMove);
    };
  });
};

const getTopCrateMessage = (crates) => {
  return crates.map((column) => {
    return column[column.length - 1];
  }).join('')
}

const crates = getCratesArray(cratesData);

rearrangeCrates(crates, data);

const topCrateMessage = getTopCrateMessage(crates);

console.log(topCrateMessage);
