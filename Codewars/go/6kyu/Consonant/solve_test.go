package consonant

import "testing"

func TestSolve(t *testing.T) {
	tests := []struct {
		name, str string
		expected  int
	}{
		{"Basic testing", "a", 0},
		{"Basic testing", "bcd", 9},
		{"Basic testing", "zea", 26},
		{"Basic testing", "az", 26},
		{"Basic testing", "baz", 26},
		{"Basic testing", "aeiou", 0},
		{"Basic testing", "uaoczei", 29},
		{"Basic testing", "abababababfapeifapefijaefaepfjavnefjnfbhwyfnjsifjapnes", 143},
		{"Basic testing", "codewars", 37},
		{"Basic testing", "bup", 16},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := solve(tt.str)
			if result != tt.expected {
				t.Errorf("Expected %d return %d", tt.expected, result)
			}
			t.Logf("Return %d", result)
		})
	}
}
