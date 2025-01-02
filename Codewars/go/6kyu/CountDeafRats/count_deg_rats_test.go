package countdeafrats

import "testing"

func TestCountDeafRats(t *testing.T) {
	tests := []struct {
		name, town string
		expected   int
	}{
		{"ex1", "~O~O~O~O P", 0},
		{"ex2", "P O~ O~ ~O O~", 1},
		{"ex3", "~O~O~O~OP~O~OO~", 2},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := CountDeafRats(tt.town)
			if result != tt.expected {
				t.Errorf("Expected %d return %d", tt.expected, result)
			}
		})
	}
}
