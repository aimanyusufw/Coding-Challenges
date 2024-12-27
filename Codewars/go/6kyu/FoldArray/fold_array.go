// Codewars 8
// Title :	Fold an array
// Question :	In this kata you have to write a method that folds a given array of integers by the middle x-times.
// Challange Url :	https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/go
// Level : 6kyu

package foldarray

// method 1
func FoldArray(arr []int, runs int) []int {
	for i := 0; i < runs; i++ {
		n := len(arr) / 2
		tempArray := []int{}
		for j := 0; j < n; j++ {
			tempArray = append(tempArray, arr[j]+arr[len(arr)-1-j])
		}
		if len(arr)%2 == 1 {
			tempArray = append(tempArray, arr[n])
		}
		arr = tempArray
	}
	return arr
}

// method 2

// other user method
// func FoldArray(arr []int, runs int) []int {
// 	for i := 0; i < runs; i++ {
// 		midpoint := len(arr) / 2
// 		newArray := make([]int, midpoint)
// 		for j := 0; j < midpoint; j++ {
// 			newArray[j] = arr[j] + arr[len(arr)-j-1]
// 		}
// 		if len(arr)%2 != 0 {
// 			newArray = append(newArray, arr[midpoint])
// 		}
// 		arr = newArray
// 	}
// 	return arr
// }
