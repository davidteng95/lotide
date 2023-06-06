//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

//Test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const empty = [];
// tail(empty);
// assertEqual(empty.length, 0);

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for const words = ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail(empty), []); 
  });

});