// Leetcode 2064
// Title :  Minimized of maximum of products distributed to any store
// Instructions :   You are given an integer n indicating there are n specialty retail stores. There are m product types of varying amounts, which are given as a 0-indexed integer array quantities, where quantities[i] represents the number of products of the ith product type.
// Challange Url :  https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
// Level : Medium

// Method : 1
export var minimizedMaximum = function (n, quantities) {
  const canDistribute = (x) => {
    let requiredStores = 0;
    for (const quantity of quantities) {
      requiredStores += Math.ceil(quantity / x);
      if (requiredStores > n) return false;
    }
    return true;
  };
  let left = 1;
  let right = Math.max(...quantities);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canDistribute(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// Method 2
export class Solution {
  isPossible(x, quantities, n) {
    let sum = 0;
    for (let u of quantities) {
      sum += Math.ceil(u / x);
    }
    return sum > n;
  }

  minimizedMaximum(n, quantities) {
    let left = 1,
      right = 100000;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (this.isPossible(mid, quantities, n)) left = mid + 1;
      else right = mid;
    }
    return left;
  }
}

// Other Users Method
