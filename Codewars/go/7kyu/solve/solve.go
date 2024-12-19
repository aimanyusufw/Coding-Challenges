// Codewars 15
// Title :	Alphabet symmetry
// Question :	Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2.
// Challange Url :	https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/go
// Level : 7kyu

package solve

import "strings"

// method 1
func solve(slice []string) []int {
	correctCount := []int{}
	for _, c := range slice {
		correct := 0
		for i, char := range strings.ToLower(c) {
			if int(char)-'a' == i {
				correct++
			}
		}
		correctCount = append(correctCount, correct)
	}
	return correctCount
}

// method 2

// other user method
// func solve(slice []string) []int {
// 	result := make([]int, len(slice))

// 	for i, str := range slice {
// 		count := 0

// 		for i := 0; i < len(str); i++ {
// 			if int(str[i])&31 == i+1 {
// 				count++
// 			}
// 		}

// 		result[i] = count
// 	}

// 	return result
// }
