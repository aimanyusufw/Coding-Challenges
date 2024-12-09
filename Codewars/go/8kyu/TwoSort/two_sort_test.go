package twosort

import "testing"

func TestTwoSort(t *testing.T) {
	tests := []struct {
		name     string
		arr      []string
		expected string
	}{
		{"Basic Testing", []string{"bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"}, "b***i***t***c***o***i***n"},
		{"Basic Testing", []string{"turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"}, "a***r***e"},
		{"Basic Testing", []string{"lets", "talk", "about", "javascript", "the", "best", "language"}, "a***b***o***u***t"},
		{"Basic Testing", []string{"i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"}, "c***o***d***e"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := TwoSort(tt.arr)
			if result != tt.expected {
				t.Errorf("Expected %s return %s", tt.expected, result)
			}
		})
	}
}
