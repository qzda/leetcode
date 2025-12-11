// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;

  while (i < nums.length) {
    for (let j = i; j < nums.length; j++) {
      if (
        nums[j] === nums[i] &&
        nums[j + 1] !== undefined &&
        nums[j + 1] === nums[i]
      ) {
        nums[j + 1] = null;
        i = j + 1;
        break;
      }

      i++;
      break;
    }
  }

  let k = 0;
  while (k < nums.length) {
    if (nums[k] === null) {
      for (let l = k + 1; l < nums.length; l++) {
        if (nums[l] !== null) {
          nums[k] = nums[l];

          k = l + 1;
          break;
        }
      }
    } else {
      k++;
    }
  }

  return k;
};
