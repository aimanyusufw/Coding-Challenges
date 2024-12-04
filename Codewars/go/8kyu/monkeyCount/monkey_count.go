package monkeycount

// Codewars 3
// Title :	Count the monkey
// Question :	You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// Challange Url :	https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// Level : 8kyu

// Method 1
func monkeyCount(n int) []int {
	result := make([]int, n)
	for i := range result {
		result[i] = i + 1
	}
	return result
}

// Method 2

// Other User Method
// func monkeyCount(n int) []int {
// 	result := make([]int, n)
// 	for i := range result {
// 		result[i] = i + 1
// 	}
// 	return result
// }
