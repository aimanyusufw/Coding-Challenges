package reverseletters

import "testing"

func TestReverseLetters(t *testing.T) {
	tests := []struct {
		name     string
		str      string
		expected string
	}{
		{"Basic testing", "krishan", "nahsirk"},
		{"Basic testing", "ultr53o?n", "nortlu"},
		{"Basic testing", "ab23c", "cba"},
		{"Basic testing", "krish21an", "nahsirk"},
		{"Basic testing", "", ""},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ReverseLetters(tt.str)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
