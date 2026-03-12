// https://leetcode.cn/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length === 1) return s;

  const res = new Array(numRows).fill("");
  let i = 0;
  let rowIndex = 0;
  let direction = 0; // 0: donw 1: up

  while (i < s.length) {
    res[rowIndex] += s[i];

    direction ? (rowIndex -= 1) : (rowIndex += 1);

    if (rowIndex < 0) {
      direction = 0;
      rowIndex = 1;
    }
    if (rowIndex >= numRows) {
      direction = 1;
      rowIndex = numRows - 2;
    }

    i++;
  }

  return res.join("");
};
