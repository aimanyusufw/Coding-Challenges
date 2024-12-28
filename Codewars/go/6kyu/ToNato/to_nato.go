// Codewars 12
// Title :	If you can read this
// Question :	You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
// Challange Url :	https://www.codewars.com/kata/586538146b56991861000293/train/go
// Level : 6kyu

package tonato

import (
	"strings"
)

// method 1
var natoMap = map[rune]string{
	'A': "Alfa", 'B': "Bravo", 'C': "Charlie", 'D': "Delta", 'E': "Echo",
	'F': "Foxtrot", 'G': "Golf", 'H': "Hotel", 'I': "India", 'J': "Juliett",
	'K': "Kilo", 'L': "Lima", 'M': "Mike", 'N': "November", 'O': "Oscar",
	'P': "Papa", 'Q': "Quebec", 'R': "Romeo", 'S': "Sierra", 'T': "Tango",
	'U': "Uniform", 'V': "Victor", 'W': "Whiskey", 'X': "Xray", 'Y': "Yankee", 'Z': "Zulu",
}

func ToNato(input string) string {
	var result []string
	upperInput := strings.ToUpper(strings.ReplaceAll(input, " ", ""))

	for _, char := range upperInput {
		if value, exists := natoMap[char]; exists {
			result = append(result, value)
		} else {
			result = append(result, string(char))
		}
	}

	return strings.Join(result, " ")
}

// method 2

// other user method
// func ToNato(words string) string {
// 	nato := []string{
// 		"Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
// 		"Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November",
// 		"Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor",
// 		"Whiskey", "Xray", "Yankee", "Zulu",
// 	}
// 	charToCharlie := map[rune]string{}
// 	for _, value := range nato {
// 		charToCharlie[rune(value[0])] = value
// 	}

// 	result := ""
// 	for _, letter := range words {
// 		if unicode.IsLetter(letter) {
// 			result += charToCharlie[unicode.ToUpper(letter)] + " "
// 		} else if unicode.IsPunct(letter) {
// 			result += string(letter)
// 		}
// 	}
// 	return strings.TrimSpace(result)
// }
