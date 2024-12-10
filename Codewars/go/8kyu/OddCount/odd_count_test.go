package oddcount

import "testing"

func TestOddCount(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected int
	}{
		{"Basic Test", 15, 7},
		{"Basic Test", 15023, 7511},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := OddCount(tt.n)
			if result != tt.expected {
				t.Errorf("Expected %d return %d", tt.expected, result)
			}
		})
	}
}
