// Codewars 15
// Title :	powers of 2
// Question :	Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Challange Url :	https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/go
// Level : 8kyu

package powersoftwo

// method 1
func PowersOfTwo(n int) []uint64 {
	if n == 0 {
		return []uint64{1}
	}
	result := make([]uint64, n+1)
	for i := 0; i <= n; i++ {
		result[i] = 1 << i
	}
	return result
}

// method 2

// other user method
// func PowersOfTwo(n int) (arr []uint64) {
// 	for i := 0; i <= n; i++ {
// 		arr = append(arr, 1<<i)
// 	}
// 	return
// }
