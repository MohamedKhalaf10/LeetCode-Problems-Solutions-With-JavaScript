/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

let isPalindrome = function (head) {
    let current = head;
    let array = [];
    while(current){
        array.push(current.val);
        current = current.next;
    }

  let length = array.length;
  let evenStop = length / 2 - 1;
  let oddStop = (length - 1) / 2 - 1;
  if (length % 2 === 0) {
    for (let i = 0; i <= evenStop; i++) {
      if (array[i] != array[length - (i + 1)]) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i <= oddStop; i++) {
      if (array[i] != array[length - (i + 1)]) {
        return false;
      }
    }
    return true;
  }
};