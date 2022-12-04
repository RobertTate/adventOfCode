const fs = require('fs');

const workAssignments = fs.readFileSync('data.txt', 'utf-8').replace(/\r/g, '').split('\n');
workAssignments.pop();

const compareWorkAssignments = (workAssignments) => {
  let fullyContainedAssignments = 0;

  workAssignments.forEach((pair) => {
    const [left, right] = pair.split(',');
    const [leftStart, leftEnd] = left.split('-').map(str => Number(str));
    const [rightStart, rightEnd] = right.split('-').map(str => Number(str));

    if (
      (leftStart >= rightStart && leftEnd <= rightEnd) ||
      (rightStart >= leftStart && rightEnd <= leftEnd)
    ) {
      fullyContainedAssignments += 1;
    }
  });

  return fullyContainedAssignments;
};

const fullyContainedAssignments = compareWorkAssignments(workAssignments);

console.log(fullyContainedAssignments);
