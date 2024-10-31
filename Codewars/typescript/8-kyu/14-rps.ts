// Codewars 14
// Title :  Rock paper scissors
// Question :   Let's play! You have to return which player won! In case of a draw return Draw!.
// Challange Url :  https://www.codewars.com/kata/5672a98bdbdd995fad00000f
// Level : 8kyu

// Method : 1
export function rps(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

// Method : 2

// Other Users Method
// export function rps(p1: string, p2: string): string {
//   const inCase: Record<string, string> = {
//     rock: "scissors",
//     scissors: "paper",
//     paper: "rock",
//   };

//   return p1 == p2 ? "Draw!" : `Player ${inCase[p1] == p2 ? "1" : "2"} won!`;
// }
