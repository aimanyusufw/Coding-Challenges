// Codewars 9
// Title :	Numbers of decimal digits
// Question :	Determine the total number of digits in the integer (n>=0) given as input to the function.
// Challange Url :	https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/go
// Level : 7kyu

package digits

import (
	"strconv"
)

// method 1
// func Digits(n uint64) int {
// 	count := 0
// 	for n > 0 {
// 		count++
// 		n /= 10
// 	}
// 	return count
// }

// method 2
func Digits(n uint64) int {
	str := strconv.FormatUint(n, 10)
	return len(str)
}

// other user method
// func Digits(n uint64) int {
// 	return len(fmt.Sprintf("%d", n))
// }
