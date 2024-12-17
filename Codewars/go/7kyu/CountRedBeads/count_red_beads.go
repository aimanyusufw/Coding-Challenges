// Codewars 13
// Title : Simple beads count
// Question :	Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// Challange Url :	https://www.codewars.com/kata/58712dfa5c538b6fc7000569/go
// Level : 7kyu

package countredbeads

// method 1
// func CountRedBeads(n int) int {
// 	redBeads := 0
// 	for i := 0; i < n-1; i++ {
// 		redBeads += 2
// 	}
// 	return redBeads
// }

// method 2
func CountRedBeads(n int) (redBeads int) {
	for i := 0; i < n-1; i++ {
		redBeads += 2
	}
	return
}

// other user method
// func CountRedBeads(n int) int {
// 	if n < 1 {
// 	  return 0
// 	}
// 	return (n - 1) * 2
//   }
