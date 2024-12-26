package highestrank

import "testing"

func TestHighestRank(t *testing.T) {
	tests := []struct {
		name     string
		nums     []int
		expected int
	}{
		{"Sample test 1: 12, 10, 8, 12, 7, 6, 4, 10, 12", []int{12, 10, 8, 12, 7, 6, 4, 10, 12}, 12},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := HighestRank(tt.nums)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
