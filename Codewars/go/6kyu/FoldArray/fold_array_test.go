package foldarray

import "testing"

func matchingSlice(s1, s2 []int) bool {
	if len(s1) != len(s2) {
		return false
	}
	for i, s := range s1 {
		if s != s2[i] {
			return false
		}
	}
	return true
}

func TestFoldArray(t *testing.T) {
	tests := []struct {
		name     string
		arr      []int
		rune     int
		expected []int
	}{

		{"Basic tests", []int{1, 2, 3, 4, 5}, 1, []int{6, 6, 3}},
		{"Basic tests", []int{1, 2, 3, 4, 5}, 2, []int{9, 6}},
		{"Basic tests", []int{1, 2, 3, 4, 5}, 3, []int{15}},
		{"Basic tests", []int{-9, 9, -8, 8, 66, 23}, 1, []int{14, 75, 0}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := FoldArray(tt.arr, tt.rune)
			if !matchingSlice(tt.expected, result) {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
