/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let values = [];
  for (let account of accounts) {
    let value = 0;
    for (let num of account) {
      value += num;
    }
    values.push(value);
  }
  return Math.max(...values);
};