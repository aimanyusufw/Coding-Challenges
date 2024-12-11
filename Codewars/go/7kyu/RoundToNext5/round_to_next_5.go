// Codewars 3
// Title :	Round up to the next multiple of 5
// Question :	Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Challange Url :	https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/go
// Level : 7kyu

package roundtonext5

import "math"

// method 1
func RoundToNext5(n int) int {
	return int(math.Ceil(float64(n)/5) * 5)
}

// method 2

// other user method
// func RoundToNext5(n int) int {
// 	for n%5 != 0 {
// 		n++
// 	}
// 	return n
// }
