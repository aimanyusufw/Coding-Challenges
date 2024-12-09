// Codewars 16
// Title : Is it a palindrom
// Question :	Write a function that checks if a given string (case insensitive) is a palindrome.
// Challange Url :	https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/go
// Level : 8kyu

package ispalindrome

import "strings"

// method 1
func IsPalindrome(s string) bool {
	s = strings.ToLower(s)
	n := len(s)
	for i := 0; i < n/2; i++ {
		if s[i] != s[n-1-i] {
			return false
		}
	}
	return true
}

// method 2

// other user method
// func IsPalindrome(str string) bool {
// 	str = strings.ToLower(str)
// 	for i := 0; i < len(str)/2; i++ {
// 		if str[i] != str[len(str)-i-1] {
// 			return false
// 		}
// 	}
// 	return true
// }
