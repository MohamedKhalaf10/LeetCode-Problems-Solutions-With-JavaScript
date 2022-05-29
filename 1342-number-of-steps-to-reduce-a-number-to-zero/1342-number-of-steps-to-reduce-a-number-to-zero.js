/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
  let counter = 0;
  for (let i = 0; num > 0; i++) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    counter += 1;
  }
  return counter;
};