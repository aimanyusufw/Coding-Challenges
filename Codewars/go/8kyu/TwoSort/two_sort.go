// Codewars 18
// Title :	Sort and star
// Question :	You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// Challange Url :	https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/go
// Level : 8kyu

package twosort

import (
	"sort"
	"strings"
)

// method 1
func TwoSort(arr []string) string {
	sort.Strings(arr)
	first := arr[0]
	return strings.Join(strings.Split(first, ""), "***")
}

// method 2

// other user method
// func TwoSort(arr []string) string {
// 	sort.Strings(arr)
// 	return strings.Join(strings.Split(arr[0], ""), "***")
// }
