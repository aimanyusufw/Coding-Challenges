package thirt

import "testing"

func TestThirt(t *testing.T) {
	tests := []struct {
		name        string
		n, expected int
	}{
		{"should handle basic cases", 8529, 79},
		{"should handle basic cases", 85299258, 31},
		{"should handle basic cases", 5634, 57},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Thirt(tt.n)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
			t.Logf("Return %d", result)
		})
	}
}
