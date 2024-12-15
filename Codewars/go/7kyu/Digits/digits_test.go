package digits

import "testing"

func TestDigits(t *testing.T) {
	tests := []struct {
		name     string
		n        uint64
		expected int
	}{
		{"Basic testing", 5, 1},
		{"Basic testing", 12345, 5},
		{"Basic testing", 9876543210, 10},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Digits(tt.n)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
