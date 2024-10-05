// Codewars 19
// Title : Two to One
// Instructions : Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Challange Url : https://www.codewars.com/kata/5656b6906de340bd1b0000ac/
// Level : 7kyu

// Method : 1
// function longest(str1, str2) {
//   const combained = [...str1.split(""), ...str2.split("")];
//   const shortdUniqueLetter = [];
//   for (let i = 0; i < combained.length; i++) {
//     if (!shortdUniqueLetter.includes(combained[i])) {
//       shortdUniqueLetter.push(combained[i]);
//     }
//   }
//   const shortdAlphabetical = shortdUniqueLetter.sort().join("");
//   return shortdAlphabetical;
// }

// Method : 2
const longest = (s1, s2) => [...new Set([...s1, ...s2])].sort().join("");

// Other Users Method

// Result or debug
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
