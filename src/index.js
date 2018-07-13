const { selection, bubble, insertion } = require('./sort')

console.log(`Selection - ${selection([4, 9 ,3, 5, 2, 7, 1])}`);
console.log(`Bubble - ${bubble.default([4, 9 ,3, 5, 2, 7, 1])}`);
console.log(`Bubble improved - ${bubble.improved([4, 9 ,3, 5, 2, 7, 1])}`);
console.log(`Insertion - ${insertion([4, 9 ,3, 5, 2, 7, 1])}`);