// Codewars 5
// Title :	Simple Fun #176: Reverse Letter
// Question :	Given a string str, reverse it and omit all non-alphabetic characters.
// Challange Url :	https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/go
// Level : 7kyu

package reverseletters

import "unicode"

// method 1
func ReverseLetters(str string) (result string) {
	for i := len(str) - 1; i >= 0; i-- {
		if unicode.IsLetter(rune(str[i])) {
			result += string(str[i])
		}
	}
	return
}

// method 2

// other user method
// func ReverseLetters(s string) string {
// 	var word string = ""
// 	  for i := len(s) - 1; i >= 0; i-- {
// 		  //
// 		  if (s[i] > 64 && s[i] < 91) || (s[i] > 96 && s[i] < 123) {
// 			  word += string(s[i])
// 		  }
// 	  }
// 	  return word
//   }
