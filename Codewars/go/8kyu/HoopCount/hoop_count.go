// Codewars 10
// Title : keep up the hoop
// Question :	Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging
// Challange Url :	https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/go
// Level : 8kyu

package hoopcount

// method 1
func HoopCount(n int) string {
	resut := [2]string{"Keep at it until you get it", "Great, now move on to tricks"}
	if n >= 10 {
		return resut[1]
	} else {
		return resut[0]
	}
}

// method 2

// other user method
// func HoopCount(n int) string {
// 	if n < 10 {
// 		return "Keep at it until you get it"
// 	}
// 	return "Great, now move on to tricks"
// }
