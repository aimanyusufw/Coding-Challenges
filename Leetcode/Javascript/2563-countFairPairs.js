// Leetcode 2563
// Title :  Count the number of fair pairs
// Instructions :   Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.
// Challange Url :  https://leetcode.com/problems/count-the-number-of-fair-pairs/
// Level : Medium

// Method : 1
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const low = lowerBound(nums, lower - nums[i], i + 1, n - 1);
    const high = upperBound(nums, upper - nums[i], i + 1, n - 1);
    count += high - low;
  }

  return count;
};

function lowerBound(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// Binary search untuk batas atas (upper bound)
function upperBound(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// Method 2

// Other Users Method

// Result or debug
console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6));
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11));
