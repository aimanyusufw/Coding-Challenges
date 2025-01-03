// Codewars 19
// Title :	Where is my parent!?
// Question :	Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
// Challange Url :	https://www.codewars.com/kata/58539230879867a8cd00011c/go
// Level : 6kyu

package findchildren

import "strings"

// method 1
func FindChildren(str string) string {
	splitStr := strings.Split(str, "")
	n := len(splitStr)
	for i := 0; i < n; i++ {
		for j := 0; j < n-i-1; j++ {
			if strings.EqualFold(splitStr[j], splitStr[j+1]) {
				if splitStr[j] > splitStr[j+1] {
					splitStr[j], splitStr[j+1] = splitStr[j+1], splitStr[j]
				}
			} else if strings.ToLower(splitStr[j]) > strings.ToLower(splitStr[j+1]) {
				splitStr[j], splitStr[j+1] = splitStr[j+1], splitStr[j]
			}
		}
	}
	return strings.Join(splitStr, "")
}

// method 2
// func FindChildren(str string) string {
// 	splitStr := strings.Split(str, "")
// 	sort.Slice(splitStr, func(i, j int) bool {
// 		if strings.ToLower(splitStr[i]) == strings.ToLower(splitStr[j]) {
// 			return splitStr[i] < splitStr[j]
// 		}
// 		return strings.ToLower(splitStr[i]) < strings.ToLower(splitStr[j])
// 	})
// 	return strings.Join(splitStr, "")
// }

// other user method
// func FindChildren(dancingBrigade string) string {
// 	str_lower := strings.ToLower(dancingBrigade)
// 	str_lw := strings.Split(str_lower, "")
// 	sort.Strings(str_lw)
// 	ch := ""
// 	for i, char := range str_lw {
// 		if char != ch {
// 			temp := char
// 			str_lw[i] = strings.Title(char)
// 			ch = temp
// 		}
// 	}
// 	return strings.Join(str_lw, "")
// }
