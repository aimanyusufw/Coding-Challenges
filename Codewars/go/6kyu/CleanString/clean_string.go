// Codewars 3
// Title :	Backspaces in string
// Question :	Your task is to process a string with "#" symbols.
// Challange Url :	https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/go
// Level : 6kyu

package cleanstring

// method 1
func CleanString(str string) string {
	chars := []rune{}
	for _, char := range str {
		if char != '#' {
			chars = append(chars, char)
		} else {
			if len(chars) > 0 {
				chars = chars[:len(chars)-1]
			}
		}
	}
	return string(chars)
}

// method 2
// func CleanString(str string) string {
// 	chars := ""
// 	for _, char := range str {
// 		sChar := string(char)
// 		len := len(chars)
// 		if sChar != "#" {
// 			chars += sChar
// 		} else {
// 			if len > 0 {
// 				chars = chars[:len-1]
// 			}
// 		}
// 	}
// 	return chars
// }

// other user method
// func CleanString(s string) string {
// 	stack := []rune{}
// 	for _, r := range s {
// 		if r == '#' {
// 			if len(stack) > 0 {
// 				stack = stack[:len(stack)-1]
// 			}
// 		} else {
// 			stack = append(stack, r)
// 		}
// 	}
// 	return string(stack)
// }
