// Codewars 7
// Title :	Pyramid Array
// Question :	Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
// Challange Url :	https://www.codewars.com/kata/515f51d438015969f7000013/train/go
// Level : 6kyu

package pyramid

// method 1
func Pyramid(n int) [][]int {
	result := [][]int{}
	for i := 1; i <= n; i++ {
		tempArray := []int{}
		for j := 0; j < i; j++ {
			tempArray = append(tempArray, 1)
		}
		result = append(result, tempArray)
	}
	return result
}

// method 2

// other user method
// func Pyramid(n int) [][]int {
// 	row := [][]int{}
// 	cell := []int{}
// 	for i := 0; i < n; i++ {
// 		cell = append(cell, 1)
// 		row = append(row, cell)
// 	}
// 	return row
// }
