package getplanetname

import "testing"

func TestGetPlanetName(t *testing.T) {
	tests := []struct {
		name     string
		ID       int
		expected string
	}{
		{"Basic testing", 2, "Venus"},
		{"Basic testing", 5, "Jupiter"},
		{"Basic testing", 3, "Earth"},
		{"Basic testing", 4, "Mars"},
		{"Basic testing", 8, "Neptune"},
		{"Basic testing", 1, "Mercury"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := GetPlanetName(tt.ID)
			if result != tt.expected {
				t.Errorf("return %s expected %s", result, tt.expected)
			}
		})
	}
}
