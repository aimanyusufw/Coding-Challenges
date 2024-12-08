package calculateyears

import "testing"

func TestCalculateYears(t *testing.T) {
	tests := []struct {
		name     string
		years    int
		expected [3]int
	}{
		{"Basic Testing", 1, [3]int{1, 15, 15}},
		{"Basic Testing", 2, [3]int{2, 24, 24}},
		{"Basic Testing", 10, [3]int{10, 56, 64}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := CalculateYears(tt.years)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
