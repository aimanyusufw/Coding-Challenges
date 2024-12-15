package inascorder

import "testing"

func TestInAsOrder(t *testing.T) {
	tests := []struct {
		name     string
		numbers  []int
		expected bool
	}{
		{"Basic testing", []int{1, 2, 4, 7, 19}, true},
		{"Basic testing", []int{1, 2, 3, 4, 5}, true},
		{"Basic testing", []int{1, 6, 10, 18, 2, 4, 20}, false},
		{"Basic testing", []int{9, 8, 7, 6, 5, 4, 3, 2, 1}, false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := InAscOrder(tt.numbers)
			if result != tt.expected {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
