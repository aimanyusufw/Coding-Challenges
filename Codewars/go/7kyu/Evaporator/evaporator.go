// Codewars 11
// Title :	Deodorant Evaporator
// Question :	The program reports the nth day (as an integer) on which the evaporator will be out of use.
// Challange Url :	https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/go
// Level : 7kyu

package evaporator

// method 1
// func Evaporator(content float64, evepPerDay int, threshold int) int {
// 	thresholdContent := content * (float64(threshold) / 100.0)
// 	days := 0
// 	for content > thresholdContent {
// 		days++
// 		content -= content * (float64(evepPerDay) / 100.0)
// 	}
// 	return days
// }

// method 2
func Evaporator(c float64, eD int, t int) (days int) {
	tC := c * (float64(t) / 100.0)
	for c > tC {
		days++
		c -= c * (float64(eD) / 100.0)
	}
	return
}

// other user method
// func Evaporator(content float64, evapPerDay int, threshold int) int {
// 	base := 1.0 - float64(evapPerDay)/100.0
// 	top := float64(threshold) / 100.0
// 	N := math.Log(top) / math.Log(base)

// 	return int(math.Ceil(N))
// }
