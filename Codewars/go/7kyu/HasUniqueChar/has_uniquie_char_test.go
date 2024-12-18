package hasuniquechar

import "testing"

func TestHasUniqueChar(t *testing.T) {
	tests := []struct {
		name     string
		str      string
		expected bool
	}{
		{"Basic Testing", "  nAa", false},
		{"Basic Testing", "abcde", true},
		{"Basic Testing", "++-", false},
		{"Basic Testing", "AaBbC", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := HasUniqueChar(tt.str)
			if result != tt.expected {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
