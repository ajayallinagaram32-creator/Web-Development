// Import the functions from data.js
const { printArray, printArrayForEach, printArrayForOf } = require('./data');

// Sample array
const sampleArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log('Using printArray:');
printArray(sampleArray);

console.log('\nUsing printArrayForEach:');
printArrayForEach(sampleArray);

console.log('\nUsing printArrayForOf:');
printArrayForOf(sampleArray);