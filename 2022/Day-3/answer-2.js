const fs = require('fs');

const rucksacks = fs.readFileSync('data.txt', 'utf-8').replace(/\r/g, '').split('\n');
rucksacks.pop();

let sumOfReoccurringItemPriorities = 0;

for (let i = 0; i < rucksacks.length; i+=3) {
  let ruckSackGroup = rucksacks.slice(i, i + 3);
  let s1 = ruckSackGroup[0].split('');
  let s2 = ruckSackGroup[1].split('');
  let s3 = ruckSackGroup[2].split('');

  let reoccurringItem = s1.filter((item) => {
    return s2.includes(item) && s3.includes(item);
  })[0];

  const isLowerCase = reoccurringItem === reoccurringItem.toLowerCase();
  const itemPriorityValue = reoccurringItem.charCodeAt(0) - ( isLowerCase ? 96 : 38 );
  sumOfReoccurringItemPriorities += itemPriorityValue;
}

console.log(sumOfReoccurringItemPriorities);
