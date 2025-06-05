// Instructions: Use lodash's reduce function to get the product of all numbers in the array.

const _ = require('lodash');

const numbers = [1, 2, 3, 4];

const product = numbers.reduce((acc, curr) => {
  return acc * curr
})

console.log(product); // Expected output: 24
