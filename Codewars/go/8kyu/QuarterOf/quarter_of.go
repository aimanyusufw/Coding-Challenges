// Codewars 4
// Title :	Quarther of the year
// Question :	Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// Challange Url :	https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
// Level : 8kyu

package quarterof

// Method 1
func QuarterOf(month int) int {
	return (month + 2) / 3
}

// Method 2

// Other User Method
// func QuarterOf(month int) int {
// 	quarter := math.Ceil(float64(month) / 3)
// 	return int(quarter)
// }
