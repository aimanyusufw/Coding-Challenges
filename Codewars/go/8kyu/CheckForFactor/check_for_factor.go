// Codewars 8
// Title :	Grasshopper - Check for factor
// Question :	This function should test if the factor is a factor of base.
// Challange Url :	https://www.codewars.com/kata/55cbc3586671f6aa070000fb
// Level : 8kyu

package checkforfactor

// method 1
// func CheckForFactor(base int, factor int) bool {
// 	result := base % factor
// 	return result == 0
// }

// method 2
func CheckForFactor(base int, factor int) bool {
	return base%factor == 0
}

// other user method
// func CheckForFactor(base int, factor int) bool {
// 	result := base % factor
// 	if result == 0 {
// 		return true
// 	}
// 	return false
// }
