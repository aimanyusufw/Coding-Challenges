// Codewars 1
// Title :	Meeting
// Question :	When the last names are the same, sort them by first name.
// Challange Url :	https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/go
// Level : 6kyu

package meeting

import (
	"sort"
	"strings"
)

// method 1
func Meeting(s string) string {
	type Name struct {
		FirstName string
		LastName  string
	}
	names := strings.Split(s, ";")
	nameList := make([]Name, 0, len(names))
	for _, fullName := range names {
		parts := strings.Split(fullName, ":")
		nameList = append(nameList, Name{FirstName: strings.ToUpper(parts[0]), LastName: strings.ToUpper(parts[1])})
	}
	sort.Slice(nameList, func(i, j int) bool {
		if nameList[i].LastName == nameList[j].LastName {
			return nameList[i].FirstName < nameList[j].FirstName
		}
		return nameList[i].LastName < nameList[j].LastName
	})
	result := make([]string, len(nameList))
	for i, name := range nameList {
		result[i] = "(" + name.LastName + ", " + name.FirstName + ")"
	}
	return strings.Join(result, "")
}

// method 2

// other user method
// func Meeting(s string) string {
// 	sw := strings.Split(strings.ToUpper(s), ";")
// 	res := []string{}
// 	for _, pn := range sw {
// 		a := strings.Split(pn, ":")
// 		s := "(" + a[1] + ", " + a[0] + ")"
// 		res = append(res, s)
// 	}
// 	sort.Strings(res)
// 	return strings.Join(res, "")
// }
