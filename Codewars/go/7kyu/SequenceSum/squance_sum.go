// Codewars 2
// Title :	Sum of a squance
// Question :	Your task is to write a function which returns the sum of a sequence of integers.
// Challange Url :	https://www.codewars.com/kata/586f6741c66d18c22800010a/go
// Level : 7kyu

package sequencesum

// method 1
// func SequenceSum(start, end, step int) int {
// 	if start > end {
// 		return 0
// 	}
// 	numbers := []int{}
// 	result := 0
// 	for i := start; i <= end; i += step {
// 		numbers = append(numbers, i)
// 	}
// 	for _, v := range numbers {
// 		result += v
// 	}
// 	return result
// }

// method 2
func SequenceSum(start, end, step int) int {
	total := 0
	for i := start; i <= end; i += step {
		total = total + i
	}
	return total
}

// other user method
// func SequenceSum(start, end, step int) int {
// 	if end < start {
// 		return 0
// 	}
// 	n := (end - start) / step
// 	return (n + 1) * (2*start + n*step) / 2
// }
