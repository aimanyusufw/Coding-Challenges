// Codewars 1
// Title :	Find the middle element
// Question :	 create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// Challange Url :	https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/go
// Level : 7kyu

package gimme

// method 1
func Gimme(array [3]int) int {
	sorted := [3]int{}
	copy(sorted[:], array[:])
	for i := 0; i < 3; i++ {
		for j := 0; j < 3-i-1; j++ {
			if sorted[j] > sorted[j+1] {
				temp := sorted[j]
				sorted[j] = sorted[j+1]
				sorted[j+1] = temp
			}
		}
	}
	for i, v := range array {
		if v == sorted[1] {
			return i
		}
	}
	return -1
}

// method 2

// other user method
// func Gimme(array [3]int) int {
// 	arrayCopy := array

// 	arrSlice := arrayCopy[:]
// 	sort.Ints(arrSlice)
// 	val := arrSlice[1]

// 	for i, v := range array {
// 		if v == val {
// 			return i
// 		}
// 	}

// 	return 0
// }
