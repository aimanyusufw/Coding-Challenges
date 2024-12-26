// Codewars 5
// Title :	Tortoise racing
// Question :	The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
// Challange Url :	https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/go
// Level : 6kyu

package race

// method 1
// func Race(v1, v2, g int) (res [3]int) {
// 	if v1 >= v2 {
// 		return [3]int{-1, -1, -1}
// 	}
// 	speed := v2 - v1
// 	t := float64(g) / float64(speed)
// 	res[0] = int(t)
// 	minutesFloat := (t - float64(res[0])) * 60
// 	res[1] = int(minutesFloat)
// 	secondsFloat := (minutesFloat - float64(res[1])) * 60
// 	res[2] = int(secondsFloat)
// 	if secondsFloat-float64(res[2]) >= 0.999 {
// 		res[2]++
// 	}
// 	if res[2] == 60 {
// 		res[2] = 0
// 		res[1]++
// 	}
// 	if res[1] == 60 {
// 		res[1] = 0
// 		res[0]++
// 	}
// 	return
// }

// method 2
func Race(v1, v2, g int) [3]int {
	if v1 >= v2 {
		return [3]int{-1, -1, -1}
	}
	s := g * 3600 / (v2 - v1)
	return [3]int{s / 3600, (s / 60) % 60, s % 60}
}

// other user method
// func Race(v1, v2, g int) [3]int {
// 	if v1 >= v2 {
// 		return [3]int{-1, -1, -1}
// 	}
// 	t := int(float64(g) / float64(v2-v1) * 3600.0)
// 	h := t / 3600
// 	t = t % 3600
// 	m := t / 60
// 	s := t % 60
// 	return [3]int{h, m, s}
// }
