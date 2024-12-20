package sortmystring

import "testing"

func TestSortMyString(t *testing.T) {
	tests := []struct {
		name, s, expected string
	}{
		{"Basic testing", "CodeWars", "CdWr oeas"},
		{"Basic testing", "YCOLUE'VREER", "YOU'RE CLEVER"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := SortMyString(tt.s)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
