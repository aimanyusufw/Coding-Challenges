// Codewars 8
// Title :	Are the number are in order?
// Question :	In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order
// Challange Url :	https://www.codewars.com/kata/56b7f2f3f18876033f000307
// Level : 7kyu

package inascorder

// method 1
func InAscOrder(numbers []int) bool {
	for i := 0; i < len(numbers)-1; i++ {
		if numbers[i] > numbers[i+1] {
			return false
		}
	}
	return true
}

// method 2

// other user method
// func InAscOrder(numbers []int) bool {
// 	return sort.IntsAreSorted(numbers)
// }
