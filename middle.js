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

module.exports = middle;