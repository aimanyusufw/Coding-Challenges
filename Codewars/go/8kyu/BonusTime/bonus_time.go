// Codewars 7
// Title :	Do i get a bonus?
// Question :	It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Challange Url :	https://www.codewars.com/kata/56f6ad906b88de513f000d96/
// Level : 8kyu

package bonustime

import (
	"strconv"
)

// method 1
func BonusTime(salary int, bonus bool) string {
	result := salary
	if bonus {
		result *= 10
	}
	return "£" + strconv.Itoa(result)
}

// method 2

// other user method
// func BonusTime(salary int, bonus bool) string {
// 	if bonus {
// 		salary = salary * 10
// 	}
// 	return fmt.Sprintf("£%d", salary)
// }
