// Codewars 2
// Title :	Consonant Value
// Question :	Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
// Challange Url :	https://www.codewars.com/kata/59c633e7dcc4053512000073/train/go
// Level : 6kyu

package consonant

import "sort"

// method 1
func solve(str string) int {
	consonantChar := map[rune]bool{'a': true, 'u': true, 'i': true, 'e': true, 'o': true}
	subStringValues := []int{}
	charVal := 0
	for _, char := range str {
		if !consonantChar[char] {
			charVal += int(char - 'a' + 1)
		} else {
			if charVal > 0 {
				subStringValues = append(subStringValues, charVal)
			}
			charVal = 0
		}
	}
	if charVal != 0 {
		subStringValues = append(subStringValues, charVal)
		charVal = 0
	}
	if len(subStringValues) == 0 {
		return 0
	}
	sort.Slice(subStringValues, func(i, j int) bool {
		return subStringValues[i] > subStringValues[j]
	})
	return subStringValues[0]
}

// method 2

// other user method
// func solve(string_ string) (maximum int) {
// 	var sum int
// 	for _, r := range string_ {
// 		switch r {
// 		case 'a', 'e', 'i', 'o', 'u':
// 			sum = 0
// 			continue
// 		}
// 		sum += int(r - 96)
// 		if sum > maximum {
// 			maximum = sum
// 		}
// 	}
// 	return maximum
// }
