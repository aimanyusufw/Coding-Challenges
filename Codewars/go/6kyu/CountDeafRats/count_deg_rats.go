// Codewars 18
// Title :	The Deaf Rats of Hamelin
// Question :	How many deaf rats are there?
// Challange Url :	https://www.codewars.com/kata/598106cb34e205e074000031/train/go
// Level : 6kyu

package countdeafrats

import (
	"strings"
)

// method 1
func CountDeafRats(town string) int {
	town = strings.ReplaceAll(town, " ", "")
	pIndex := strings.Index(town, "P")
	left := town[:pIndex]
	right := town[pIndex+1:]
	countDeaf := func(rats string, correctDirection string) int {
		count := 0
		for i := 0; i < len(rats); i += 2 {
			if rats[i:i+2] != correctDirection {
				count++
			}
		}
		return count
	}
	defLeft := countDeaf(left, "~O")
	defRight := countDeaf(right, "O~")
	return (defLeft + defRight)
}

// method 2

// other user method
// func CountDeafRats(town string) int {
// 	df, p, s := 0, 0, ""
// 	for _, r := range town {
// 		switch {
// 		case r == 'P':
// 			p = 1
// 		case r == 'O', r == '~':
// 			switch s += string(r); {
// 			case s == "O~":
// 				s = ""
// 				df += 1 - p
// 			case s == "~O":
// 				s = ""
// 				df += p
// 			}
// 		}
// 	}
// 	return df
// }
