package checkforfactor

import (
	"testing"
)

func TestCheckForFactor(t *testing.T) {
	tests := []struct {
		name     string
		base     int
		factor   int
		expected bool
	}{
		{"Basuc test", 10, 2, true},
		{"Basuc test", 63, 7, true},
		{"Basuc test", 2450, 5, true},
		{"Basuc test", 24612, 3, true},
		{"Basuc test", 9, 2, false},
		{"Basuc test", 653, 7, false},
		{"Basuc test", 2453, 5, false},
		{"Basuc test", 24617, 3, false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := CheckForFactor(tt.base, tt.factor)
			if result != tt.expected {
				t.Errorf("Return %v expect %v", result, tt.expected)
			}
		})
	}
}
