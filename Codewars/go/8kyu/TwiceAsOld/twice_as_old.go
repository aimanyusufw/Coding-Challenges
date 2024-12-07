// Codewars 11
// Title : Twice as old
// Question :	Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
// Challange Url :	https://www.codewars.com/kata/5b853229cfde412a470000d0/go
// Level : 8kyu

package twiceasold

import "math"

// method 1
func TwiceAsOld(dadYearsOld, sonYearsOld int) int {
	result := dadYearsOld - sonYearsOld*2
	return int(math.Abs(float64(result)))
}

// method 2

// other user method
// func TwiceAsOld(dadYearsOld, sonYearsOld int) int {
// 	x := dadYearsOld - sonYearsOld*2
// 	if x >= 0 {
// 		return x
// 	}
// 	return -x
// }
