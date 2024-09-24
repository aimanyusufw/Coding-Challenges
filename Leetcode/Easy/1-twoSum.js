// Leetcode 1
// Title : Two Sum
// Instructions : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Challange Url : https://leetcode.com/problems/two-sum/
// Level : Easy

// Method : 1
const twoSum = (nums, target) => {
  const numDict = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numDict[diff] !== undefined) {
      return [numDict[diff], i];
    }
    numDict[nums[i]] = i;
  }
};

// Other Users Method

// Result or debug
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
