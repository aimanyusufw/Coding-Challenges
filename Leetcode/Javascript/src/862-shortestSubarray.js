// Leetcode 862
// Title :  Shortest Subarray with Sum at Least K
// Instructions :   Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k.
// Challange Url :  https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k
// Level : Medium

// Method : 1
export function shortestSubarray(nums, k) {
  let res = Infinity;
  let curSum = 0;
  const deque = [];

  for (let r = 0; r < nums.length; r++) {
    curSum += nums[r];
    if (curSum >= k) {
      res = Math.min(res, r + 1);
    }
    while (deque.length > 0 && curSum - deque[0][0] >= k) {
      const [prefixSum, endIdx] = deque.shift();
      res = Math.min(res, r - endIdx);
    }
    while (deque.length > 0 && deque[deque.length - 1][0] > curSum) {
      deque.pop();
    }
    deque.push([curSum, r]);
  }
  return res === Infinity ? -1 : res;
}

// Method 2
// function shortestSubarray(nums, k) {
//   const n = nums.length;
//   const sum = new Array(n + 1).fill(0);

//   for (let i = 0; i < n; i++) {
//     sum[i + 1] = sum[i] + nums[i];
//   }

//   const q = new Array(n + 1).fill(0);
//   let l = 0;
//   let r = 0;
//   let minLength = n + 1;

//   for (let i = 0; i < sum.length; i++) {
//     while (r > l && sum[i] >= sum[q[l]] + k) {
//       minLength = Math.min(minLength, i - q[l]);
//       l++;
//     }

//     while (r > l && sum[i] <= sum[q[r - 1]]) {
//       r--;
//     }

//     q[r] = i;
//     r++;
//   }

//   return minLength <= n ? minLength : -1;
// }
