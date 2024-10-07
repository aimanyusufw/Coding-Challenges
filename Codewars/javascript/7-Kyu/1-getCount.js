// Codewars 1
// Title : Vowel Count
// Instructions : Return the number (count) of vowels in the given string.
// Challange Url : https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Level : 7kyu

// Method : 1
// function getCount(str) {
//   const vowels = { a: "a", u: "u", i: "i", e: "e", o: "o" };
//   let vowelsCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels[str[i]] !== undefined) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }

// Method 2
const getCount = (s) =>
  s.split("").filter((c) => "aeiouAEIOU".includes(c)).length;

// Other Users Method
// const getCount = (str) => (str.match(/[aeiou]/gi) || []).length;

// Result or debug
console.log(getCount("abracadabra"));
console.log(getCount("anthony"));
console.log(getCount("nicholasjackson"));
