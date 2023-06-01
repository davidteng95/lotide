const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let newString = string.replace(/\s+/g, '');
  let letterCount = {};
  for (let letter of newString) {
    if (letterCount[letter] !== undefined) {
      letterCount[letter]++;
      } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));