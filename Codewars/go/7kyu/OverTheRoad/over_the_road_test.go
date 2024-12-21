package overtheroad

import "testing"

func TestOverTheRoad(t *testing.T) {
	tests := []struct {
		name                 string
		address, n, expected int
	}{
		{"Basic testing", 1, 3, 6},
		{"Basic testing", 3, 3, 4},
		{"Basic testing", 2, 3, 5},
		{"Basic testing", 3, 5, 8},
		{"Basic testing", 7, 11, 16},
		{"Basic testing", 23633656673, 310027696726, 596421736780},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := OverTheRoad(tt.address, tt.n)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
