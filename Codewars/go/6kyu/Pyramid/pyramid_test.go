package pyramid

import "testing"

func matchingSlice(s1, s2 [][]int) bool {
	if len(s1) != len(s2) {
		return false
	}

	for i, slice1 := range s1 {
		if len(slice1) != len(s2[i]) {
			return false
		}
		for j, v := range slice1 {
			if v != s2[i][j] {
				return false
			}
		}
	}
	return true
}

func TestPyramid(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected [][]int
	}{
		{"Testing for 0", 0, [][]int{}},
		{"Testing for 1", 1, [][]int{{1}}},
		{"Testing for 2", 2, [][]int{{1}, {1, 1}}},
		{"Testing for 3", 3, [][]int{{1}, {1, 1}, {1, 1, 1}}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Pyramid(tt.n)
			if !matchingSlice(tt.expected, result) {
				t.Errorf("Failed %s: got %v, expected %v", tt.name, result, tt.expected)
			}
		})
	}
}
