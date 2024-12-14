package angle

import "testing"

func TestAngle(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected int
	}{
		{"Angle(3)", 3, 180},
		{"Angle(4)", 4, 360},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Angle(tt.n)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
