// Codewars 14
// Title : Cat years, dog years
// Question :	Return their respective ages now as [humanYears,catYears,dogYears]
// Challange Url :	https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/go
// Level : 8kyu

package calculateyears

// method 1
func CalculateYears(years int) (res [3]int) {
	result := [3]int{years}
	switch {
	case years == 1:
		result[1] = 15
		result[2] = 15
	case years == 2:
		result[1] = 24
		result[2] = 24
	default:
		result[1] = 24 + (4 * (years - 2))
		result[2] = 24 + (5 * (years - 2))
	}
	return result
}

// method 2

// other user method
// func CalculateYears(years int) (result [3]int) {
// 	switch years {
// 	case 1:
// 		result = [3]int{1, 15, 15}
// 	case 2:
// 		result = [3]int{2, 24, 24}
// 	default:
// 		result = [3]int{years, 24 + 4*(years-2), 24 + 5*(years-2)}
// 	}
// 	return
// }
