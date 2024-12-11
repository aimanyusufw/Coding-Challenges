package sequencesum

import "testing"

func TestSquanceSum(t *testing.T) {
	tests := []struct {
		name     string
		begin    int
		end      int
		step     int
		expected int
	}{
		{"Basic Testing", 2, 6, 2, 12},
		{"Basic Testing", 1, 5, 1, 15},
		{"Basic Testing", 1, 5, 3, 5},
		{"Basic Testing", 0, 15, 3, 45},
		{"Basic Testing", 16, 15, 3, 0},
		{"Basic Testing", 2, 24, 22, 26},
		{"Basic Testing", 2, 2, 2, 2},
		{"Basic Testing", 2, 2, 1, 2},
		{"Basic Testing", 1, 15, 3, 35},
		{"Basic Testing", 15, 1, 3, 0},
	}

	for _, v := range tests {
		t.Run(v.name, func(t *testing.T) {
			result := SequenceSum(v.begin, v.end, v.step)
			if result != v.expected {
				t.Errorf("Return %d expected %d", result, v.expected)
			}
		})
	}
}
