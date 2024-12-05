// Codewars 6
// Title :	The Feast of many beast
// Question :	Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Challange Url :	https://www.codewars.com/kata/5aa736a455f906981800360d
// Level : 8kyu

package feast

// Method 1
func Feast(beast string, dish string) bool {
	beast_char := [2]string{string(beast[0]), string(beast[len(beast)-1])}
	dish_char := [2]string{string(dish[0]), string(dish[len(dish)-1])}
	if dish_char[0] != beast_char[0] || dish_char[1] != beast_char[1] {
		return false
	}
	return true
}

// Method 2

// Other User Method
// func Feast(beast string, dish string) bool {
// 	return beast[0] == dish[0] && beast[len(beast)-1] == dish[len(dish)-1]
// }
