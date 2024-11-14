// Leetcode 2914
// Title :  Minimum number of changes to make binnary string beautiful
// Instructions :   You are given a 0-indexed binary string s having an even length.
// Challange Url :  https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/
// Level : Medium

// Method : 1
function minChanges(s) {
  const splitString = s.split("");
  let changes = 0;
  for (let i = 0; i < splitString.length; i += 2) {
    if (i + 1 < splitString.length) {
      if (splitString[i] !== splitString[i + 1]) {
        changes++;
      }
    }
  }
  return changes;
}

// Method 2

// Other Users Method
var minChanges = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i = i + 2) {
    if (s[i] != s[i + 1]) count++;
  }
  return count;
};

// Result or debug
console.log(minChanges("1001"));
console.log(minChanges("10"));
console.log(minChanges("1100"));
console.log(minChanges("11000111"));
