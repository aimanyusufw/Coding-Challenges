package ispalindrome

import "testing"

func TestIsPalindrom(t *testing.T) {
	tests := []struct {
		name     string
		s        string
		expected bool
	}{
		{"Basic Testing", "a", true},
		{"Basic Testing", "aba", true},
		{"Basic Testing", "Abba", true},
		{"Basic Testing", "hello", false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := IsPalindrome(tt.s)
			if result != tt.expected {
				t.Errorf("Expected %v return %v", tt.expected, result)
			}
		})
	}
}
