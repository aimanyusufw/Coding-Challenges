// Leetcode 1829
// Title : Maximum XOR for each Query
// Instructions :   You are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times:
// Challange Url :  https://leetcode.com/problems/maximum-xor-for-each-query/
// Level : Easy

// Method : 1
function getMaximumXor(nums, maximumBit) {
  let xor = 0;
  for (let n of nums) {
    xor ^= n;
  }
  const mask = (1 << maximumBit) - 1;
  const answer = [];
  for (let n of nums.reverse()) {
    answer.push(xor ^ mask);
    xor ^= n;
  }
  return answer;
}

// Method 2

// Other Users Method
var getMaximumXor = function (nums, maximumBit) {
  nums[0] = nums[0] ^ (2 ** maximumBit - 1);
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] ^ nums[i];
  }
  return nums.reverse();
};

// Result or debug
console.log(1 << 6);
console.log(getMaximumXor([0, 1, 1, 3], 2));
console.log(getMaximumXor([2, 3, 4, 7], 3));
console.log(getMaximumXor([0, 1, 2, 2, 5, 7], 3));
