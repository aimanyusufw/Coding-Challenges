// Codewars 10
// Title :	Fibonacci, Tribonacci and friends
// Question :	If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother.
// Challange Url :	https://www.codewars.com/kata/556e0fccc392c527f20000c5/go
// Level : 6kyu

package xbonacci

// method 1
func Xbonacci(signature []int, n int) []int {
	x := len(signature)
	if n <= x {
		return signature[:n]
	}
	result := make([]int, n)
	copy(result, signature)
	for i := x; i < n; i++ {
		sum := 0
		for j := i - x; j < i; j++ {
			sum += int(result[j])
		}
		result[i] = sum
	}
	return result
}

// method 2

// other user method
// func Xbonacci(signature []int, n int) []int {
// 	if n <= len(signature) {
// 		return signature[0:n]
// 	}
// 	var sum int
// 	for _, v := range signature {
// 		sum += v
// 	}
// 	initial := len(signature) + 1
// 	for len(signature) < n {
// 		signature = append(signature, sum)
// 		sum *= 2
// 		sum -= signature[len(signature)-initial]
// 	}
// 	return signature
// }
