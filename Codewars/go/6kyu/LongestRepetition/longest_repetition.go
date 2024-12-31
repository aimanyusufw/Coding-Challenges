// Codewars 14
// Title :	Character with longest consecutive repetition
// Question :	For a given string s find the character c (or C) with longest consecutive repetition and return
// Challange Url :	https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/go
// Level : 6kyu

package longestrepetition

type Result struct {
	C rune
	L int
}

// method 1
func LongestRepetition(text string) Result {
	var (
		maxChar       rune
		maxLength     int
		currentChar   rune
		currentLength int
	)
	for _, c := range text {
		if currentChar == c {
			currentLength++
		} else {
			currentChar = c
			currentLength = 1
		}
		if currentLength > maxLength {
			maxChar = c
			maxLength = currentLength
		}
	}
	return Result{maxChar, maxLength}
}

// method 2

// other user method
// func LongestRepetition(text string) (res Result) {
// 	var loopedC rune
// 	var loopedL int
// 	for _, c := range text {
// 		if loopedC != c {
// 			loopedC, loopedL = c, 0
// 		}
// 		loopedL++

// 		if loopedL > res.L {
// 			res.C = c
// 			res.L++
// 		}
// 	}
// 	return res
// }
