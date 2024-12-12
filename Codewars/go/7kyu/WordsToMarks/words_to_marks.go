// Codewars 6
// Title :	Love vs friend
// Question :	Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
// Challange Url :	https://www.codewars.com/kata/59706036f6e5d1e22d000016/go
// Level : 7kyu

package wordstomarks

// method 1
// func WordsToMarks(str string) (result int) {
// 	alphabetic := "abcdefghijklmnopqrstuvwxyz"
// 	for _, c := range str {
// 		result += strings.Index(alphabetic, string(c)) + 1
// 	}
// 	return
// }

// method 2
func WordsToMarks(s string) (result int) {
	for _, i := range s {
		result += int(i) - 'a' + 1
	}
	return
}

// other user method
// func WordsToMarks(s string) int {
// 	count := 0
// 	for _, i := range s {
// 		count += int(i) - 'a' + 1
// 	}
// 	return count
// }
