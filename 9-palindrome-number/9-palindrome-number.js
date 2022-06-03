/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let nums = Array.from(String(head), Number);
  let length = nums.length;
  let evenStop = length / 2 - 1;
  let individualStop = (length - 1) / 2 - 1;
  if (length % 2 === 0) {
    for (let i = 0; i <= evenStop; i++) {
      if (nums[i] != nums[length - (i + 1)]) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i <= individualStop; i++) {
      if (nums[i] != nums[length - (i + 1)]) {
        return false;
      }
    }
    return true;
  }
};