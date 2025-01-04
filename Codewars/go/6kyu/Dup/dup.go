// Codewars 20
// Title :	String array duplicates
// Question :	In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// Challange Url :	https://www.codewars.com/kata/59f08f89a5e129c543000069/go
// Level : 6kyu

package dup

// method 1
// func Dup(arr []string) []string {
// 	filteredStrings := []string{}
// 	for _, str := range arr {
// 		filtered := ""
// 		cur := ""
// 		for _, char := range str {
// 			if string(char) != cur {
// 				filtered += string(char)
// 			}
// 			cur = string(char)
// 		}
// 		filteredStrings = append(filteredStrings, filtered)
// 	}
// 	return filteredStrings
// }

// method 2
func Dup(arr []string) []string {
	for i, str := range arr {
		filtered := ""
		cur := ""
		for _, char := range str {
			if string(char) != cur {
				filtered += string(char)
			}
			cur = string(char)
		}
		arr[i] = filtered
	}
	return arr
}

// other user method
// func Dup(arr []string) []string {
// 	for i, s := range arr {
// 		var (
// 			dupCheck byte
// 			fixedStr string
// 		)
// 		for j, _ := range s {
// 			if s[j] != dupCheck {
// 				dupCheck = s[j]
// 				fixedStr += string(s[j])
// 			}
// 		}
// 		arr[i] = fixedStr
// 	}
// 	return arr
// }
