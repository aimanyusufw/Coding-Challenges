// Codewars 17
// Title : 	altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Question :	Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/
// Challange Url :	https://www.codewars.com/kata/56efc695740d30f963000557/train/go
// Level : 8kyu

package toalternatingcase

import (
	"strings"
	"unicode"
)

// method 1
func ToAlternatingCase(str string) (result string) {
	for _, char := range str {
		if unicode.IsUpper(char) {
			result += strings.ToLower(string(char))
		} else {
			result += strings.ToUpper(string(char))
		}
	}
	return
}

// method 2

// other user method
// func ToAlternatingCase(str string) string {
// 	result := []rune{}
// 	for _, ch := range str {
// 		if unicode.IsUpper(ch) {
// 			result = append(result, unicode.ToLower(ch))
// 		} else if unicode.IsLower(ch) {
// 			result = append(result, unicode.ToUpper(ch))
// 		} else {
// 			result = append(result, ch)
// 		}
// 	}

// 	return string(result)
// }
