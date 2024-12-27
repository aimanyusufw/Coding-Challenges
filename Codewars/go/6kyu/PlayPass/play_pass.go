// Codewars 9
// Title :	Playing with passphrases
// Question :	With longer passphrases it's better to have a small and easy program. Would you write it?
// Challange Url :	https://www.codewars.com/kata/559536379512a64472000053/train/go
// Level : 6kyu

package playpass

import (
	"strings"
	"unicode"
)

// method 1
func PlayPass(s string, n int) string {
	var builder strings.Builder
	for i, char := range s {
		if unicode.IsDigit(char) {
			digit := int(char - '0')
			builder.WriteRune(rune('0' + (9 - digit)))
		} else if unicode.IsLetter(char) {
			char = unicode.ToLower(char)
			shifted := (char-'a'+rune(n))%26 + 'a'
			if i%2 == 0 {
				builder.WriteRune(unicode.ToUpper(shifted))
			} else {
				builder.WriteRune(unicode.ToLower(shifted))
			}
		} else {
			builder.WriteRune(char)
		}

	}
	runes := []rune(builder.String())
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

// method 2

// other user method
// func PlayPass(s string, n int) string {
// 	result := make([]rune, len(s))

// 	for index, element := range s {
// 		switch {
// 		// Even letter
// 		case element >= 65 && element < 91 && index%2 == 0:
// 			result[len(s)-index-1] = rune((int(element)-65+n)%26 + 65)
// 		// Odd letter
// 		case element >= 65 && element < 91 && index%2 == 1:
// 			result[len(s)-index-1] = rune((int(element)-65+n)%26 + 97)
// 		// Number
// 		case element >= 48 && element < 58:
// 			result[len(s)-index-1] = rune(105 - int(element))
// 		// Anything else
// 		default:
// 			result[len(s)-index-1] = element
// 		}
// 	}
// 	return string(result)
// }
