// Leetcode 3254
// Title :   Find the Power of K-Size Subarrays I
// Instructions :   You are given an array of integers nums of length n and a positive integer k.
// Challange Url :  https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i
// Level : Medium

// Method : 1
export function resultsArray(nums, k) {
  const n = nums.length;
  const res = [];
  const dq = [];

  for (let i = 0; i < n; i++) {
    if (dq.length && dq[0] <= i - k) {
      dq.shift();
    }

    while (dq.length && nums[dq[dq.length - 1]] !== nums[i] - 1) {
      dq.pop();
    }

    dq.push(i);

    if (i >= k - 1) {
      if (dq.length === k) {
        res.push(nums[dq[dq.length - 1]]);
      } else {
        res.push(-1);
      }
    }
  }

  return res;
}

// Method 2
// var resultsArray = function (nums, k) {
//   const res = [];
//   let l = 0;
//   let consecCnt = 1;

//   for (let r = 0; r < nums.length; r++) {
//     if (r > 0 && nums[r - 1] + 1 === nums[r]) {
//       consecCnt++;
//     }

//     if (r - l + 1 > k) {
//       if (nums[l] + 1 === nums[l + 1]) {
//         consecCnt--;
//       }
//       l++;
//     }

//     if (r - l + 1 === k) {
//       res.push(consecCnt === k ? nums[r] : -1);
//     }
//   }

//   return res;
// };
