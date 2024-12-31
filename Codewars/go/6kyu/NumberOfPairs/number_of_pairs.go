// Codewars 16
// Title :	Pair of gloves
// Question :		Winter is coming, you must prepare your ski holidays.
// Challange Url :	https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/go
// Level : 6kyu

package numberofpairs

// method 1
func NumberOfPairs(gloves []string) int {
	total := 0
	glovesKind := make(map[string]int)
	for _, glove := range gloves {
		if _, exsits := glovesKind[glove]; !exsits {
			glovesKind[glove] = 1
		} else {
			if glovesKind[glove] == 1 {
				total++
				glovesKind[glove] = 0
			} else {
				glovesKind[glove]++
			}
		}
	}
	return total
}

// method 2

// other user method
// func NumberOfPairs(gloves []string) (pairs int) {
// 	seen := make(map[string]int, len(gloves))
// 	for _, glove := range gloves {
// 		seen[glove]++
// 		if seen[glove]%2 == 0 {
// 			pairs++
// 		}
// 	}
// 	return
// }
