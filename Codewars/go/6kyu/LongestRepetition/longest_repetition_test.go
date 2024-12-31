package longestrepetition

import "testing"

func TestLongestRepetition(t *testing.T) {
	tests := []struct {
		name, text string
		expected   Result
	}{
		{"it should work with the sample tests", "aaaabb", Result{'a', 4}},
		{"it should work with the sample tests", "bbbaaabaaaa", Result{'a', 4}},
		{"it should work with the sample tests", "cbdeuuu900", Result{'u', 3}},
		{"it should work with the sample tests", "abbbbb", Result{'b', 5}},
		{"it should work with the sample tests", "aabb", Result{'a', 2}},
		{"it should work with the sample tests", "ba", Result{'b', 1}},
		{"it should work with the sample tests", "", Result{}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := LongestRepetition(tt.text)
			if result != tt.expected {
				t.Errorf("Result %v expected %v", result, tt.expected)
			}
		})
	}
}
