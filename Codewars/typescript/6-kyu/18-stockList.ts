// Codewars 18
// Title :  Help the bookseller!
// Question :   A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z.
// Challange Url :  https://www.codewars.com/kata/54dc6f5a224c26032800005c
// Level : 6kyu

// Method : 1
export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (!listOfArt.length || !listOfCat.length) return "";
  const result: Record<string, number> = {};
  for (const cat of listOfCat) {
    result[cat] = 0;
  }
  for (const art of listOfArt) {
    const [code, quantity] = art.split(" ");
    const category = code[0];

    if (result[category] !== undefined) {
      result[category] += parseInt(quantity, 10);
    }
  }
  return listOfCat.map((cat) => `(${cat} : ${result[cat]})`).join(" - ");
};

// Method : 2

// Other Users Method
// export const stockList = (listOfArt:string[], listOfCat:string[]):string => {
//     if (listOfArt.length === 0 || listOfCat.length === 0) return '';
//     return listOfCat.map(char => {
//       const sum = listOfArt.reduce((acc, str) => str.startsWith(char) ? acc + +str.split(' ')[1] : acc, 0);
//       return `(${char} : ${sum})`;
//     }).join(' - ')
//   }
