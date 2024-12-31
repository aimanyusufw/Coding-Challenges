package numberofpairs

import "testing"

func TestNumberOfPairs(t *testing.T) {
	tests := []struct {
		name     string
		gloves   []string
		expected int
	}{
		{"should pass basic tests", []string{"red", "red"}, (1)},
		{"should pass basic tests", []string{"red", "green", "blue"}, (0)},
		{"should pass basic tests", []string{"gray", "black", "purple", "purple", "gray", "black"}, (3)},
		{"should pass basic tests", []string{}, (0)},
		{"should pass basic tests", []string{"red", "green", "blue", "blue", "red", "green", "red", "red", "red"}, (4)},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := NumberOfPairs(tt.gloves)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
