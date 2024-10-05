// Codewars 17
// Title : Friend or foe
// Instructions : If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Challange Url : https://www.codewars.com/kata/55b42574ff091733d900002f/
// Level : 7kyu

// Method : 1
// function friend(friends) {
//   const trueFriends = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length === 4) {
//       trueFriends.push(friends[i]);
//     }
//   }
//   return trueFriends;
// }

// Method : 2
const friend = (friends) => friends.filter((data) => data.length === 4);

// Other Users Method

// Result or debug
console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
console.log(friend(["Love", "Your", "Face", "1"]));
