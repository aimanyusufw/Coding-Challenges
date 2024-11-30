// Codewars 21
// Title :  Simple pig latin
// Question :   Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Challange Url : https://www.codewars.com/kata/520b9d2ad5c005041100000f/
// Level : 6kyu

// Method : 1
export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((s) => {
      if (!s || s === "undefined") return "";
      if (s.length === 1 && !/[a-zA-Z]/.test(s)) return s;
      return s.slice(1) + s[0] + "ay";
    })
    .join(" ");
};

// Method : 2
// export const pigIt = (a: string) => a.replace(/(\w)(\w+)*/g, "$2$1ay");
