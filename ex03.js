// Instructions: Use lodash's find function to get the first number in the array that is greater than 5.

const _ = require('lodash');

const numbers = [1, 3, 5, 7, 9];

function firstGreaterThanFive(arr) {
    const number = _.find(arr, num=>num>5)

    return number
}

console.log(firstGreaterThanFive(numbers)); // Expected output: 7
