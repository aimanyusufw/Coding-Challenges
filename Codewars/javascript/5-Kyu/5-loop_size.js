// Codewars 5
// Title :  Can you get the loop?
// Instructions :    Your objective is to determine the length of the loop.
// Challange Url :  https://www.codewars.com/kata/52a89c2ea8ddc5547a000863/train/javascript
// Level : 5kyu

// Method : 1
export function loop_size(node) {
  let slow = node;
  let fast = node;

  while (fast !== null && fast.getNext() !== null) {
    slow = slow.getNext();
    fast = fast.getNext().getNext();

    if (slow === fast) {
      let loopLength = 1;
      let current = slow;

      while (current.getNext() !== slow) {
        current = current.getNext();
        loopLength++;
      }

      return loopLength;
    }
  }

  return 0;
}

// Method 2

// Other Users Method
// function loop_size(node) {
//   var turtle = node;
//   var rabbit = node;
//   do {
//     turtle = turtle.getNext();
//     rabbit = rabbit.getNext().getNext();
//   } while (turtle != rabbit);
//   var count = 0;
//   do {
//     ++count;
//     rabbit = rabbit.getNext();
//   } while (turtle != rabbit);
//   return count;
// }
