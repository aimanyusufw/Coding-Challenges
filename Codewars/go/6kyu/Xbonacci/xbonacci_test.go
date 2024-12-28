package xbonacci

import "testing"

func matchSlice(s1, s2 []int) bool {
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

func TestXbpnacci(t *testing.T) {
	tests := []struct {
		name      string
		signature []int
		n         int
		expected  []int
	}{
		{"Basic Testing", []int{0, 1}, 10, []int{0, 1, 1, 2, 3, 5, 8, 13, 21, 34}},
		{"Basic Testing", []int{1, 1}, 10, []int{1, 1, 2, 3, 5, 8, 13, 21, 34, 55}},
		{"Basic Testing", []int{0, 0, 0, 0, 1}, 10, []int{0, 0, 0, 0, 1, 1, 2, 4, 8, 16}},
		{"Basic Testing", []int{1, 0, 0, 0, 0, 0, 1}, 10, []int{1, 0, 0, 0, 0, 0, 1, 2, 3, 6}},
		{"Basic Testing", []int{1, 0, 0, 0, 0, 0, 0, 0, 0, 0}, 20, []int{1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Xbonacci(tt.signature, tt.n)
			if !matchSlice(tt.expected, result) {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
			t.Logf("Return %v", result)
		})
	}
}
