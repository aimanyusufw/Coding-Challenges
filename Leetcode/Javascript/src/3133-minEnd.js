// Leetcode 3133
// Title :  Minmum Array End
// Instructions :  You are given two integers n and x. You have to construct an array of positive integers nums of size n where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x.
// Challange Url :  https://leetcode.com/problems/minimum-array-end/
// Level : Medium

// Method : 1
var minEnd = function (n, x) {
  --n;
  let ans = BigInt(x);
  for (let i = 0; i < 31; ++i) {
    if (((x >> i) & 1) ^ 1) {
      ans |= BigInt(n & 1) << BigInt(i);
      n >>= 1;
    }
  }
  ans |= BigInt(n) << BigInt(31);
  return Number(ans);
};

// Method 2

// Other Users Method
var minEnd = function (n, x) {
  let num = BigInt(x),
    one = BigInt(1);

  let unsetBits = [];
  for (let bit = 0n; bit < 63n; bit++) {
    if (((num >> bit) & one) ^ one) {
      unsetBits.push(bit);
    }
  }

  let mask = BigInt(n - 1);
  for (let index = 0n; index < unsetBits.length; index++) {
    if ((mask >> index) & one) {
      console.log(unsetBits[index]);
      num |= one << unsetBits[index];
    }
  }
  return Number(num);
};

// Result or debug
console.log(minEnd(3, 4));
console.log(minEnd(2, 7));
