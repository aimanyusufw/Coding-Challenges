// Codewars 10
// Title :	Sum of cubes
// Question :	Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
// Challange Url :
// Level : 7kyu

package sumcubes

import "math"

// method 1
// func SumCubes(n int) int {
// 	result := 0
// 	for i := 1; i <= n; i++ {
// 		result += i * i * i
// 	}
// 	return result
// }

// method 2
func SumCubes(n int) (result int) {
	for i := 1; i <= n; i++ {
		result += int(math.Pow(float64(i), 3))
	}
	return
}

// other user method
