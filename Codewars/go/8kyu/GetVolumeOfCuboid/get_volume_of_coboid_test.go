package getvolumeofcuboid

import "testing"

func TestGetVolumeOfCuboid(t *testing.T) {
	tests := []struct {
		name     string
		length   float64
		width    float64
		height   float64
		expected float64
	}{
		{"Basic Testing", 1.0, 2.0, 2.0, 4.0},
		{"Basic Testing", 6.3, 2.0, 5.0, 63.0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := GetVolumeOfCuboid(tt.length, tt.width, tt.height)
			if result != tt.expected {
				t.Errorf("With length = %f, width = %f, height = %f", tt.length, tt.width, tt.height)
			}
		})
	}
}
