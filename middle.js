const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const middle = function(array) {
  let length = array.length;
  if (length <= 2) {
    return [];
  }
  if (length > 2) {
    if (length % 2 === 1) {
      let oddMid = Math.floor(length / 2);
      return [array[oddMid]];
    } else if (length % 2 === 0) {
      let evenMid = Math.ceil(length / 2);
      return [array[evenMid - 1], array[evenMid]];
    }
  }
};


console.log(middle([1])); // => []
console.log(middle([1, 2]));// => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]