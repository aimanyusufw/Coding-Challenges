// Codewars 4
// Title :	A Rule of Divisibility by 13
// Question :	From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).
// Challange Url :	https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/go
// Level : 6kyu

package thirt

// method 1
func Thirt(n int) int {
	squance := []int{1, 10, 9, 12, 3, 4}
	for {
		sum := 0
		num := n
		pos := 0
		for num > 0 {
			digit := num % 10
			sum += digit * squance[pos%len(squance)]
			num /= 10
			pos++
		}
		if sum == n {
			break
		}
		n = sum
	}
	return n
}

// method 2

// other user method
// func Thirt(n int) int {
// 	var t = []int{1, 10, 9, 12, 3, 4}
// 	var i, j, k int
// 	for ; n != k; n = j {
// 		for k, i, j = n, 0, 0; n > 0; i++ {
// 			j += (n % 10) * t[i%6]
// 			n /= 10
// 		}
// 	}
// 	return n
// }
