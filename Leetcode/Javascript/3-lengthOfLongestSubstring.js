// Leetcode 3
// Title : Longest Substring Without Repeating Characters
// Instructions : Given a string s, find the length of the longest substring without repeating characters.
// Challange Url :https://leetcode.com/problems/longest-substring-without-repeating-characters
// Level : Medium

// Method : 1
// var lengthOfLongestSubstring = function (s) {
//   let longestStr = 0;
//   let set = new Set();

//   let left = 0;
//   let right = 0;

//   while (right < s.length) {
//     let letter = s[right];

//     if (!set.has(letter)) {
//       set.add(letter);
//       longestStr = Math.max(longestStr, set.size);
//       right++;
//     } else {
//       set.delete(s[left]);
//       left++;
//     }
//   }

//   return longestStr;
// };

// Other Users Method
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  let count = {};

  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    count[c] = (count[c] || 0) + 1;

    while (count[c] > 1) {
      count[s[left]] -= 1;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Result or debug
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
