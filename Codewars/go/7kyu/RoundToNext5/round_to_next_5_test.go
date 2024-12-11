package roundtonext5

import (
	"testing"
)

func TestRoundToNext5(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected int
	}{
		{"Basic Testing", 0, 0},
		{"Basic Testing", 1, 5},
		{"Basic Testing", -1, 0},
		{"Basic Testing", 5, 5},
		{"Basic Testing", 7, 10},
		{"Basic Testing", 20, 20},
		{"Basic Testing", 39, 40},
		{"Basic Testing", 121, 125},
		{"Basic Testing", 555, 555},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := RoundToNext5(tt.n)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
