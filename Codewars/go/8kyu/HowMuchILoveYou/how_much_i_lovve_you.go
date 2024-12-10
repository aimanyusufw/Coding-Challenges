// Codewars 21
// Title :	I love you, a little , a lot, passionately ... not at all
// Question :	Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals.
// Challange Url :	https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/go
// Level : 8kyu

package howmuchiloveyou

// method 1
func HowMuchILoveYou(i int) string {
	sentence := [6]string{"I love you", "a little", "a lot", "passionately", "madly", "not at all"}
	return sentence[(i-1)%6]
}

// method 2

// other user method
// func HowMuchILoveYou(i int) string {
// 	return []string{"I love you", "a little", "a lot", "passionately", "madly", "not at all"}[(i-1)%6]
// }
