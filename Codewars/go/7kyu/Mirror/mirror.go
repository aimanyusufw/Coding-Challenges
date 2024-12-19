// Codewars 16
// Title :	Moves in squared strings (I)
// Question :	You are given a string of n lines, each substring being n characters long
// Challange Url :	https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/go
// Level : 7kyu

package mirror

import "strings"

// method 1
func VertMirror(s string) string {
	lines := strings.Split(s, "\n")
	for i := range lines {
		lines[i] = reverseString(lines[i])
	}
	return strings.Join(lines, "\n")
}

func HorMirror(s string) string {
	lines := strings.Split(s, "\n")
	for i, j := 0, len(lines)-1; i < j; i, j = i+1, j-1 {
		lines[i], lines[j] = lines[j], lines[i]
	}
	return strings.Join(lines, "\n")
}

type FParam func(string) string

func Oper(f FParam, x string) string {
	return f(x)
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

// method 2

// other user method
// func VertMirror(s string) string {
// 	parts := strings.Split(s, "\n")
// 	for i, p := range parts {
// 		r := []rune(p)
// 		for j, k := 0, len(p)-1; j < k; j, k = j+1, k-1 {
// 			r[j], r[k] = r[k], r[j]
// 		}
// 		parts[i] = string(r)
// 	}
// 	return strings.Join(parts, "\n")
// }

// func HorMirror(s string) string {
// 	parts := strings.Split(s, "\n")
// 	for i, j := 0, len(parts)-1; i < j; i, j = i+1, j-1 {
// 		parts[i], parts[j] = parts[j], parts[i]
// 	}
// 	return strings.Join(parts, "\n")
// }

// type FParam func(string) string

// func Oper(f FParam, x string) string {
// 	return f(x)
// }
