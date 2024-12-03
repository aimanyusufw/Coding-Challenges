package getgrade

// Codewars 1
// Title : Grasshopper - Grade book
// Question : Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Challange Url : https://www.codewars.com/kata/55cbd4ba903825f7970000f5
// Level : 8kyu

func GetGrade(score1, score2, score3 int) rune {
	average := (score1 + score2 + score3) / 3

	switch {
	case average >= 90:
		return 'A'
	case average >= 80:
		return 'B'
	case average >= 70:
		return 'C'
	case average >= 60:
		return 'D'
	default:
		return 'F'
	}
}
