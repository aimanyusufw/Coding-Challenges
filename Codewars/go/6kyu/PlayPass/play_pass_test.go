package playpass

import "testing"

func TestPlayPass(t *testing.T) {
	tests := []struct {
		name, str string
		n         int
		expected  string
	}{
		{"should handle basic cases", "I LOVE YOU!!!", 1, "!!!vPz fWpM J"},
		{"should handle basic cases", "I LOVE YOU!!!", 0, "!!!uOy eVoL I"},
		{"should handle basic cases", "AAABBCCY", 1, "zDdCcBbB"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := PlayPass(tt.str, tt.n)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
			t.Logf("Return %s", result)
		})
	}
}
