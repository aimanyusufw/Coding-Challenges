// Codewars 17
// Title :	Ordered Count of Characters
// Question :	Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
// Challange Url :	https://www.codewars.com/kata/57a6633153ba33189e000074/train/go
// Level : 7kyu

package orderedcount

type Tuple struct {
	Char  rune
	Count int
}

// method 1
func OrderedCount(text string) []Tuple {
	charCount := make(map[rune]int)
	order := []rune{}
	for _, char := range text {
		if _, exsits := charCount[char]; !exsits {
			order = append(order, char)
		}
		charCount[char]++
	}
	result := []Tuple{}
	for _, char := range order {
		result = append(result, Tuple{Char: char, Count: charCount[char]})
	}
	return result
}

// method 2

// other user method
// func OrderedCount(text string) []Tuple {
// 	counts := make([]Tuple, 0, len(text))
// 	counted := ""

// 	for _, r := range text {
// 		if strings.Count(counted, string(r)) == 0 {
// 			counts = append(counts, Tuple{Char: r, Count: strings.Count(text, string(r))})
// 			counted += string(r)
// 		}
// 	}
// 	return counts
// }
