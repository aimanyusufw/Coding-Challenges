// Codewars 7
// Title :	Sum of angles
// Question :	Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
// Challange Url :	https://www.codewars.com/kata/5a03b3f6a1c9040084001765/go
// Level : 7kyu

package angle

// method 1
func Angle(n int) (result int) {
	result = (n - 2) * 180
	return
}

// method 2

// other user method
// func Angle(n int) int {
// 	return 180 * (n - 2)
// }
