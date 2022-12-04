const fs = require('fs');

const workAssignments = fs.readFileSync('data.txt', 'utf-8').replace(/\r/g, '').split('\n');
workAssignments.pop();

const compareWorkAssignments = (workAssignments) => {
  let overlappedAssignments = 0;

  workAssignments.forEach((pair) => {
    const [left, right] = pair.split(',');
    const [leftStart, leftEnd] = left.split('-').map(str => Number(str));
    const [rightStart, rightEnd] = right.split('-').map(str => Number(str));

    if (
      (leftEnd >= rightStart && leftStart <= rightEnd)
    ) {
      overlappedAssignments += 1;
    }
  });

  return overlappedAssignments;
};

const overlappedAssignments = compareWorkAssignments(workAssignments);

console.log(overlappedAssignments);
