// Codewars 20
// Title :	Simple Fun #152: Invite More Women?
// Question :	Arthur needs you to return true if he needs to invite more women or false if he is all set.
// Challange Url :	https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/go
// Level : 7kyu

package invitemorewomen

// method 1
func inviteMoreWomen(L []int) bool {
	var women, men int
	for _, s := range L {
		if s < 0 {
			men++
		} else {
			women++
		}
	}
	return women > men
}

// method 2

// other user method
// func inviteMoreWomen(L []int) bool {
// 	s := 0
// 	for _, v := range L {
// 		s += v
// 	}
// 	return s > 0
// }
