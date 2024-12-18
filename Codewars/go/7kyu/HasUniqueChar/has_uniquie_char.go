// Codewars 14
// Title :	All Unique
// Question :	Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
// Challange Url :	https://www.codewars.com/kata/553e8b195b853c6db4000048/train/go
// Level : 7kyu

package hasuniquechar

// method 1
func HasUniqueChar(str string) bool {
	seen := make(map[rune]bool)
	for _, c := range str {
		if seen[c] {
			return false
		}
		seen[c] = true
	}
	return true
}

// method 2

// other user method
// func HasUniqueChar(str string) bool {
// 	var m = map[rune]bool{}
// 	for _, w := range str {
// 		m[w] = true
// 	}
// 	return len(m) == len(str)
// }
