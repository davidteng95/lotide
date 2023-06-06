const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

const empty = [];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for const words = ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail(empty), []); 
  });

});