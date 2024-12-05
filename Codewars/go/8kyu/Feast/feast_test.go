package feast

import (
	"testing"
)

func TestFeast(t *testing.T) {
	tests := []struct {
		name     string
		dish     string
		beast    string
		expected bool
	}{
		{"Testing 1", "great blue heron", "garlic naan", true},
		{"Testing 1", "chickadee", "chocolate cake", true},
		{"Testing 1", "brown bear", "bear claw", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Feast(tt.beast, tt.dish)
			if result != tt.expected {
				t.Errorf("Feast(%s,%s) = %v, want %v", tt.beast, tt.dish, result, tt.expected)
			}
		})
	}
}
