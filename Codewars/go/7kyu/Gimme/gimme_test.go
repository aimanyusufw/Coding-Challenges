package gimme

import "testing"

func TestGimme(t *testing.T) {
	tests := []struct {
		name     string
		array    [3]int
		expected int
	}{
		{"Basic Testing", [3]int{2, 3, 1}, 0},
		{"Basic Testing", [3]int{5, 10, 14}, 1},
		{"Basic Testing", [3]int{1, 3, 4}, 1},
		{"Basic Testing", [3]int{15, 10, 14}, 2},
		{"Basic Testing", [3]int{-4, -23, 4}, 0},
		{"Basic Testing", [3]int{-15, -10, 14}, 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Gimme(tt.array)
			if result != tt.expected {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
