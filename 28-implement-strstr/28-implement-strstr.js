/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let exist = false;
  let needleIndex = 0;

  if (needle === "") {
    return 0;
  } else {
    needleArray = [...needle];
    haystackArray = [...haystack];
    let length = needleArray.length - 1;

    haystackArray.map((item, index) => {
      if (!exist) {
        if (item === needleArray[0]) {
          for (let i = 0; i <= length; i++) {
            if (haystackArray[index + i] === needleArray[i]) {
              exist = true;
            } else {
              exist = false;
              break;
            }
          }
        }
        needleIndex = index;
      }
    });
  }
  return exist ? needleIndex : -1;
};