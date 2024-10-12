// Codewars 4
// Title : Stop gninnipS My sdroW!
// Instructions : Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Challange Url : https://www.codewars.com/kata/5264d2b162488dc400000001
// Level : 6kyu

// Method : 1
// function spinWords(words) {
//   const splitWords = words.split(" ");
//   const finalWords = [];
//   for (let i = 0; i < splitWords.length; i++) {
//     splitWords[i].length >= 5
//       ? finalWords.push(splitWords[i].split("").reverse().join(""))
//       : finalWords.push(splitWords[i]);
//   }
//   return finalWords.join(" ");
// }

// Method : 2
const spinWords = (words) =>
  words
    .split(" ")
    .map((data) =>
      data.length >= 5 ? data.split("").reverse().join("") : data
    )
    .join(" ");

// Other Users Method
// function spinWords(string){
//   return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }

// Result or debug
console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
