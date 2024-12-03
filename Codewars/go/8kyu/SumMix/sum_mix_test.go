package summix

import (
	"testing"
)

func TestSumMix(t *testing.T) {
	tests := []struct {
		name   string
		arr    []any
		expect int
	}{
		{"Test 1", []any{9, 3, "7", "3"}, 22},
		{"Test 2", []any{"5", "0", 9, 3, 2, 1, "9", 6, 7}, 42},
		{"Test 3", []any{"3", 6, 6, 0, "5", 8, 5, "6", 2, "0"}, 41},
		{"Test 4", []any{"1", "5", "8", 8, 9, 9, 2, "3"}, 45},
		{"Test 5", []any{8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7}, 61},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := SumMix(tt.arr)
			if result != tt.expect {
				t.Errorf("SumMix(%v) = %d; want %d", tt.arr, result, tt.expect)
			}
		})
	}
}
