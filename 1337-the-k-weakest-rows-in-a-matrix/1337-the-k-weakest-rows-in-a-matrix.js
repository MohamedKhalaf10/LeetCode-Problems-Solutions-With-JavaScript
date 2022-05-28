/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  let values = [];
  let solution = [];
  mat.forEach((row, index) => {
    let value = 0;
    for (let num of row) {
      value += num;
    }
    values.push(value);
  });

  for (let i = 1; i <= k; i++) {
    let min = Math.min(...values);
    let index = values.indexOf(min);
    solution.push(index);
    values.splice(index, 1, Infinity);
  }
  return solution;
};