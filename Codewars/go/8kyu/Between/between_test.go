package between

import "testing"

func TestBetween(t *testing.T) {
	tests := []struct {
		name     string
		a        int
		b        int
		expected []int
	}{
		{"Basic Testing", 1, 4, []int{1, 2, 3, 4}},
		{"Basic Testing", -2, 2, []int{-2, -1, 0, 1, 2}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Between(tt.a, tt.b)
			if SameArray(result, tt.expected) {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}

func SameArray(res, expect []int) bool {
	if len(res) != len(expect) {
		return true
	}
	for i, n := range res {
		if n != expect[i] {
			return true
		}
	}
	return false
}
