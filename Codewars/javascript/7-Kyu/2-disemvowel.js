// Codewars 2
// Title : Disemvowel Trolls
// Instructions : A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Challange Url : https://www.codewars.com/kata/52fba66badcd10859f00097e
// Level : 7kyu

// Method : 1
// function disemvowel(str) {
//   return str.replace(/[aiueoAIUEO]/g, "");
// }

// Method 2
const disemvowel = (s) =>
  s
    .split("")
    .filter((c) => !"aeiouAEIOU".includes(c))
    .join("");

// Other Users Method
// function disemvowel(str) {
//   var str2 = "";
//   for (var i = 0; i < str.length; i++) {
//     if ("aeiou".indexOf(str[i].toLowerCase()) < 0) {
//       str2 += str[i];
//     }
//   }
//   str = str2;
//   return str;
// }

// Result or debug
console.log(disemvowel("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel("What are you, a communist?"));
