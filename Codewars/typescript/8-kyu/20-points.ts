// Codewars 20
// Title :  Tottal amount og poins
// Question :   We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Challange Url :  https://www.codewars.com/kata/5bb904724c47249b10000131
// Level : 8kyu

// Method : 1
// export function points(games: string[]): number {
//   let finallScore = 0;
//   for (let i = 0; i < games.length; i++) {
//     const pointsEachTeams = games[i].split(":");
//     if (pointsEachTeams[0] > pointsEachTeams[1]) {
//       finallScore += 3;
//     } else if (pointsEachTeams[0] === pointsEachTeams[1]) {
//       finallScore += 1;
//     }
//   }
//   return finallScore;
// }

// Method : 2
export const points = (g: string[]): number =>
  g
    .map((d) => d.split(":").map(Number))
    .reduce((c, [h, a]) => (h > a ? c + 3 : h === a ? c + 1 : c), 0);

// Other Users Method
