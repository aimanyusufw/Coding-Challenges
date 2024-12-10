// Codewars 20
// Title :	What is between?
// Question :	Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// Challange Url :	https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/go
// Level : 8kyu

package between

// method 1
func Between(a, b int) []int {
	betweenNumbers := []int{}
	for i := a; i <= b; i++ {
		betweenNumbers = append(betweenNumbers, i)
	}
	return betweenNumbers
}

// method 2

// other user method
// func Between(a, b int) (c []int) {
// 	for a <= b {
// 		c = append(c, a)
// 		a++
// 	}
// 	return
// }
