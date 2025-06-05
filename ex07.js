// Instructions: Use lodash's orderBy function to sort the array of objects by the "age" property in descending order.

const _ = require('lodash');

const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jim', age: 20 }
];

console.log(_.orderBy(people, ["age"], ["desc"]))

function sortedPeople(arr) {
  const age = _.filter(arr, people)
  return age
}

console.log(sortedPeople); // Expected output: [{ name: 'Jane', age: 30 }, { name: 'John', age: 25 }, { name: 'Jim', age: 20 }]
