// Codewars 6
// Title :	Highest Rank Number in an Array
// Question :	Complete the method which returns the number which is most frequent in the given input array
// Challange Url :	https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/go
// Level : 6kyu

package highestrank

// method 1
func HighestRank(nums []int) int {
	frequency := make(map[int]int)
	for _, num := range nums {
		frequency[num]++
	}
	maxFreq := 0
	result := 0
	for num, freq := range frequency {
		if freq > maxFreq || (freq == maxFreq && num > result) {
			maxFreq = freq
			result = num
		}
	}
	return result
}

// method 2

// other user method
// func HighestRank(nums []int) int {
// 	mii, maxK, maxV := map[int]int{}, 0, 0
// 	for _, v := range nums {
// 		mii[v]++
// 		if mii[v] > maxV || (mii[v] == maxV && v > maxK) {
// 			maxK = v
// 			maxV = mii[v]
// 		}
// 	}
// 	return maxK
// }
