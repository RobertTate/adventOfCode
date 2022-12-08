const fs = require('fs');

const dataStreamBuffer = fs.readFileSync('data.txt', 'utf-8').replace(/\r/g, '').split('');
dataStreamBuffer.pop();

const findMarker = (str, setSize) => {
  const index = str.findIndex((el, i) => {
    const unique = new Set();

    for (let j = 0; j < setSize; j++) {
      unique.add(str[i + j]);
    }    
    
    if (unique.size === setSize) {
      return true;
    }
  });

  return index + setSize;
};

const endIndexofFirstMarker = findMarker(dataStreamBuffer, 14);

console.log(endIndexofFirstMarker);

