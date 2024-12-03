package summix

import (
	"strconv"
)

// Codewars 2
// Title :	Sum Mixed Array
// Question :	Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Challange Url :	https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Level : 8kyu

// Method 1
func SumMix(arr []any) int {
	sum := 0
	for _, v := range arr {
		switch value := v.(type) {
		case int:
			sum += value
		case string:
			num, err := strconv.Atoi(value)
			if err == nil {
				sum += num
			}
		}
	}
	return sum
}

// Method 2

// Other User Method
// func SumMix(arr []any) int {
// 	sum := 0
// 	for _, v := range arr {
// 		iv, _ := strconv.Atoi(fmt.Sprintf("%v", v))
// 		sum += iv
// 	}
// 	return sum
// }
