package evaporator

import (
	"testing"
)

func TestEvaporator(t *testing.T) {
	tests := []struct {
		name                string
		content             float64
		evpPerDay           int
		threshold, expected int
	}{
		{"Basic Testing", 10, 10, 10, 22},
		{"Basic Testing", 10, 10, 5, 29},
		{"Basic Testing", 100, 5, 5, 59},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Evaporator(tt.content, tt.evpPerDay, tt.threshold)
			if result != tt.expected {
				t.Errorf("Return %d expected %d", result, tt.expected)
			}
		})
	}
}
