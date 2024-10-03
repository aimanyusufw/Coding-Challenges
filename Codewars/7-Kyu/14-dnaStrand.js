// Codewars 14
// Title : Complementary DNA
// Instructions : In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell)
// Challange Url : https://www.codewars.com/kata/554e4a2f232cdd87d9000038/
// Level : 7kyu

// Method : 1
// function dnaStrand(dna) {
//   let finalDna = "";
//   for (let i = 0; i < dna.length; i++) {
//     let stringReplaced = "";
//     if (dna[i] === "A" || dna[i] === "T") {
//       stringReplaced = dna[i] === "T" ? "A" : "T";
//     } else {
//       stringReplaced = dna[i] === "G" ? "C" : "G";
//     }
//     finalDna += stringReplaced;
//   }
//   return finalDna;
// }

// Method
const dnaStrand = (dna) =>
  dna.replace(/[ATCG]/g, (val) => ({ A: `T`, T: `A`, C: `G`, G: `C` }[val]));

// Result or debug
console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
