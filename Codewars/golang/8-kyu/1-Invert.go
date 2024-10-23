// Codewars 1
// Title : Invert values
// Question : Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// Challange Url : https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// Level : 7kyu

package main

import "fmt"

// Method : 1
func Invert(arr []int) []int {
    inverted := make([]int, len(arr)) 
    for i, num := range arr {
        inverted[i] = -num 
    }
    return inverted
}

// Method : 2

// Other user method
// func Invert(arr []int) (result []int) {
//   for _, i := range arr {
//     result = append(result, -i)
//   }
//   return
// }

// Log or debug
func main(){
	fmt.Println([]int{1,2,3,4,5})
	fmt.Println([]int{1,-2,3,-4,5})
	fmt.Println(nil,nil)
}