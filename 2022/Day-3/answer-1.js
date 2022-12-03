const fs = require('fs');

const rucksacks = fs.readFileSync('data.txt', 'utf-8').replace(/\r/g, '').split('\n');
rucksacks.pop();

let sumOfReoccurringItemPriorities = 0;

rucksacks.forEach((sack) => {
  const sackArr = sack.split('');
  const half = Math.ceil(sackArr.length / 2);    
  const firstHalf = sackArr.slice(0, half);
  const secondHalf = sackArr.slice(half);
  const reoccurringItem = firstHalf.filter((item) => secondHalf.includes(item))[0];
  const isLowerCase = reoccurringItem === reoccurringItem.toLowerCase();
  const itemPriorityValue = reoccurringItem.charCodeAt(0) - ( isLowerCase ? 96 : 38 );
  sumOfReoccurringItemPriorities += itemPriorityValue;
});

console.log(sumOfReoccurringItemPriorities);
