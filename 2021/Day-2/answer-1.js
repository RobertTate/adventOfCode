const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n');

const coordinates = {
  x: 0,
  y: 0
}

const instructionMap = {
  forward(amount) {
    coordinates.x += amount;
  },
  down(amount)  {
    coordinates.y += amount;
  },
  up(amount) {
    coordinates.y -= amount;
  }
}

data.forEach((instruction) => {
  const [direction, amount] = instruction.split(' ');
  instructionMap[direction](Number(amount));
});

console.log(coordinates.x * coordinates.y);