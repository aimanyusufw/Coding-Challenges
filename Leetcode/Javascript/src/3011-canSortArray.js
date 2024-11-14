// Leetcode 3011
// Title :  Find if array can be soted
// Instructions :   In one operation, you can swap any two adjacent elements if they have the same number of
// set bits
// . You are allowed to do this operation any number of times (including zero).
// Challange Url :  https://leetcode.com/problems/find-if-array-can-be-sorted
// Level : Medium

// Method : 1
var canSortArray = function (nums) {
  const countSetBits = (n) => {
    return n.toString(2).split("1").length - 1;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        if (countSetBits(nums[j]) === countSetBits(nums[j + 1])) {
          let temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

// Method 2

// Other Users Method

// Result or debug
console.log(canSortArray([8, 4, 2, 30, 15]));
console.log(canSortArray([1, 2, 3, 4, 5]));
console.log(canSortArray([3, 16, 8, 4, 2]));
