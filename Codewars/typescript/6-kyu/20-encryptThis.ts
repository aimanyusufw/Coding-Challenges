// Codewars 20
// Title :  Encrypt This
// Question :   You want to create secret messages which can be deciphered by the Decipher this! kata.
// Challange Url :  https://www.codewars.com/kata/5848565e273af816fb000449/
// Level : 6kyu

// Method : 1
export const encryptThis = (str: string) => {
  if (str === "") return "";
  const arrayString = str.split(" ");
  const result = [];
  for (const string of arrayString) {
    const [firstChar, remLetters] = [
      string.slice(0, 1),
      [...string.slice(1).split("")],
    ];
    const temp = remLetters[0];
    remLetters[0] = remLetters[remLetters.length - 1];
    remLetters[remLetters.length - 1] = temp;
    result.push(firstChar.charCodeAt(0) + remLetters.join(""));
  }
  return result.join(" ");
};

// Method : 2
// export const encryptThis = (str: string): string =>
//   str
//     .split(" ")
//     .map((word) =>
//       word
//         .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//         .replace(/^\w/, (letter) => letter.charCodeAt(0).toFixed(0))
//     )
//     .join(" ");
