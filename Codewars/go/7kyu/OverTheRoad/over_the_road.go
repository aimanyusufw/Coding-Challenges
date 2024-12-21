// Codewars 19
// Title :	Over the road
// Question :	You've just moved into a perfectly straight street with exactly n identical houses on either side of the road.
// Challange Url :	https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/go
// Level : 7kyu

package overtheroad

// method 1
// func OverTheRoad(address, n int) int {
// 	return n*2 + 1 - address
// }

// method 2
func OverTheRoad(address, n int) (result int) {
	result = n*2 + 1 - address
	return
}

// other user method
// func OverTheRoad(address int, housesRow int) int {
// 	minAddress, maxAddress := 1, housesRow*2
// 	return minAddress + maxAddress - address
// }
