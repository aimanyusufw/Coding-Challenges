package countredbeads

import "testing"

func TestCountRedBeads(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected int
	}{
		{"Basic Testing", 0, 0},
		{"Basic Testing", 1, 0},
		{"Basic Testing", 3, 4},
		{"Basic Testing", 5, 8},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := CountRedBeads(tt.n)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
