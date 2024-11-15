// Leetcode 1574
// Title :  Shortest Subarray to be Removed to Make Array Sorted
// Instructions :   Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.
// Challange Url :  https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/
// Level : Medium

// Method : 1
export var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;

  let left = 0;
  while (left < n - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === n - 1) {
    return 0;
  }

  let right = n - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  let minToRemove = Math.min(n - left - 1, right);

  let i = 0,
    j = right;
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      minToRemove = Math.min(minToRemove, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return minToRemove;
};

// Method 2

// Other Users Method
var findLengthOfShortestSubarray = function (arr) {
  let size = arr.length,
    r = size - 1;
  while (r > 0 && arr[r - 1] <= arr[r]) r -= 1;
  if (r === 0) return 0;
  let res = r;
  for (let i = 0; i < size; i++) {
    if (arr[i - 1] > arr[i]) break;
    while (arr[i] > arr[r]) r += 1;
    res = Math.min(res, r - i - 1);
  }
  return res;
};
