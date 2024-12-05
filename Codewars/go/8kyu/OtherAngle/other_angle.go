// Codewars 5
// Title :	Third angle og triangle
// Question :	Write a function to return the 3rd.
// Challange Url :	https://www.codewars.com/kata/5a023c426975981341000014
// Level : 8kyu

package otherangle

// Method 1
func OtherAngle(a int, b int) int {
	return 180 - (a + b)
}

// Method 2

// Other User Method
// func OtherAngle(a int, b int) int {
// 	if a > 0 && b > 0 {
// 		return 180 - (a + b)
// 	} else {
// 		fmt.Println("Angles must be higher when zero!")
// 		return 0
// 	}
// }
