// Codewars 12
// Title :	Part of a list
// Question :	Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Challange Url :	https://www.codewars.com/kata/56f3a1e899b386da78000732/train/go
// Level : 7kyu

package partlist

import "strings"

// method 1
func PartList(arr []string) string {
	splitArray := []string{}
	for i := 1; i < len(arr); i++ {
		part1 := strings.Join(arr[:i], " ")
		part2 := strings.Join(arr[i:], " ")
		splitArray = append(splitArray, "("+part1+", "+part2+")")
	}
	return strings.Join(splitArray, "")
}

// method 2

// other user method
// func PartList(arr []string) string {
// 	var sb Builder // sb is stand for `string builder`!

// 	n := len(arr)

// 	for x := 1; x < n; x++ {
// 		sb.WriteString("(" + Join(arr[:x], " ") + ", " + Join(arr[x:], " ") + ")")
// 	}

// 	return sb.String()
// }
