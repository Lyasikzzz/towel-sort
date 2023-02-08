module.exports = function towelSort (matrix) {
  let result = [],
      num;
  if (typeof matrix == 'object' && matrix.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      num = matrix[i];
      if (i % 2 == 0) {
        for (let j = 0; j < num.length; j++) {
          result.push(num[j]);
        }
      } else {
        for (let k = num.length; k > 0; k--) {
          result.push(num[k-1]);
        }
      }
    }
    return result;
  } else {
    return [];
  }
};