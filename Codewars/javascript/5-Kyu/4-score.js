// Codewars 4
// Title :  Greed is Good
// Instructions : A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
// Challange Url :  https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
// Level : 5kyu

// Method : 1
export function score(dice) {
  const counts = Array(7).fill(0);
  for (const num of dice) {
    counts[num]++;
  }
  let totalScore = 0;
  if (counts[1] >= 3) {
    totalScore += 1000;
    counts[1] -= 3;
  }
  for (let i = 2; i <= 6; i++) {
    if (counts[i] >= 3) {
      totalScore += i * 100;
      counts[i] -= 3;
    }
  }
  totalScore += counts[1] * 100;
  totalScore += counts[5] * 50;

  return totalScore;
}

// Method 2

// Other Users Method
// export function score(dice) {
//   var dc = [0, 0, 0, 0, 0, 0];
//   var tdr = [1000, 200, 300, 400, 500, 600];
//   var sdr = [100, 0, 0, 0, 50, 0];
//   dice.forEach(function (x) {
//     dc[x - 1]++;
//   });
//   return dc.reduce(function (s, x, i) {
//     return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
//   }, 0);
// }
