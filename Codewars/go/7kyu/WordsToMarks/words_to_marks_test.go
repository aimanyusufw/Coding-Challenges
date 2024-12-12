package wordstomarks

import "testing"

func TestWordsToMarks(t *testing.T) {
	tests := []struct {
		name     string
		str      string
		expected int
	}{
		{"Testing for attitude", "attitude", 100},
		{"Testing for friends", "friends", 75},
		{"Testing for family", "family", 66},
		{"Testing for selfness", "selfness", 99},
		{"Testing for knowledge", "knowledge", 96},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := WordsToMarks(tt.str)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
