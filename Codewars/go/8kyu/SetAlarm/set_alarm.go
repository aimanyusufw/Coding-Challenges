// Codewars 10
// Title : L1 : Set alarm
// Question :	Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters.
// Challange Url :	https://www.codewars.com/kata/568dcc3c7f12767a62000038/
// Level : 8kyu

package setalarm

// method 1
// func SetAlarm(employed bool, vacation bool) bool {
// 	var result bool
// 	switch employed {
// 	case true:
// 		if vacation {
// 			result = false
// 		} else {
// 			result = true
// 		}
// 	case false:
// 		result = false
// 	}
// 	return result
// }

// method 2
func SetAlarm(employed bool, vacation bool) bool {
	var result bool = false
	if employed && !vacation {
		result = true
	}
	return result
}

// other user method
// func SetAlarm(employed, vacation bool) bool {
// 	return employed && !vacation
// }
