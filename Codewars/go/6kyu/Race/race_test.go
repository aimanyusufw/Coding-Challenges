package race

import "testing"

func TestRace(t *testing.T) {
	tests := []struct {
		name      string
		v1, v2, g int
		expected  [3]int
	}{
		{"should handle basic cases", 720, 850, 70, [3]int{0, 32, 18}},
		{"should handle basic cases", 820, 81, 550, [3]int{-1, -1, -1}},
		{"should handle basic cases", 80, 91, 37, [3]int{3, 21, 49}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Race(tt.v1, tt.v2, tt.g)
			if result != tt.expected {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
