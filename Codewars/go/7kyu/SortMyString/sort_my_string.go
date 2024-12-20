// Codewars 18
// Title :	Odd-Even String Sort
// Question :	Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated.
// Challange Url :	https://www.codewars.com/kata/580755730b5a77650500010c/go
// Level : 7kyu

package sortmystring

import "strings"

// method 1
func SortMyString(s string) string {
	str := [2]string{"", ""}
	for i, char := range s {
		if i%2 == 0 {
			str[0] += string(char)
		} else {
			str[1] += string(char)
		}
	}
	return strings.Join(str[:], " ")
}

// method 2

// other user method
// func SortMyString(s string) string {
// 	var lyginis, nelyginis string
// 	for i, raide := range s {
// 		if i%2 == 0 {
// 			lyginis += string(raide)
// 		} else {
// 			nelyginis += string(raide)
// 		}
// 	}

// 	return lyginis + " " + nelyginis
// }
