// Codewars 11
// Title :	Statistics for an Athletic Association
// Question :	You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete.
// Challange Url : https://www.codewars.com/kata/55b3425df71c1201a800009c/train/go
// Level : 6kyu

package stati

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

// method 1
func timeToSeconds(timeStr string) int {
	parts := strings.Split(timeStr, "|")
	h, _ := strconv.Atoi(parts[0])
	m, _ := strconv.Atoi(parts[1])
	s, _ := strconv.Atoi(parts[2])
	return h*3600 + m*60 + s
}
func secondsToTime(seconds int) string {
	h := seconds / 3600
	m := (seconds % 3600) / 60
	s := seconds % 60
	return fmt.Sprintf("%02d|%02d|%02d", h, m, s)
}
func Stati(input string) string {
	if input == "" {
		return ""
	}

	times := strings.Split(input, ", ")
	seconds := make([]int, len(times))
	for i, timeStr := range times {
		seconds[i] = timeToSeconds(timeStr)
	}

	sort.Ints(seconds)

	rangeValue := seconds[len(seconds)-1] - seconds[0]

	total := 0
	for _, sec := range seconds {
		total += sec
	}
	average := total / len(seconds)

	var median int
	mid := len(seconds) / 2
	if len(seconds)%2 == 0 {
		median = (seconds[mid-1] + seconds[mid]) / 2
	} else {
		median = seconds[mid]
	}

	rangeStr := secondsToTime(rangeValue)
	averageStr := secondsToTime(average)
	medianStr := secondsToTime(median)

	return fmt.Sprintf("Range: %s Average: %s Median: %s", rangeStr, averageStr, medianStr)
}

// method 2

// other user method
// func fmtSec(sec int) string {
// 	return fmt.Sprintf("%02d|%02d|%02d", sec/3600, (sec%3600)/60, sec%60)
// }

// func Stati(strg string) string {
// 	if strg == "" {
// 		return ""
// 	}
// 	sum, si := 0, []int{}
// 	for _, v := range strings.Split(strg, ", ") {
// 		sec := 0
// 		for _, v1 := range strings.Split(v, "|") {
// 			i, _ := strconv.Atoi(v1)
// 			sec = sec*60 + i
// 		}
// 		si = append(si, sec)
// 		sum += sec
// 	}
// 	sort.Ints(si)
// 	r1 := si[len(si)-1] - si[0]
// 	r2 := sum / len(si)
// 	r3 := 0
// 	if len(si)%2 == 1 {
// 		r3 = si[len(si)/2]
// 	} else {
// 		r3 = (si[len(si)/2-1] + si[len(si)/2]) / 2
// 	}
// 	return fmt.Sprintf("Range: %s Average: %s Median: %s", fmtSec(r1), fmtSec(r2), fmtSec(r3))
// }
