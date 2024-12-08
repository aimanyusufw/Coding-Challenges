package powersoftwo

import "testing"

func TestPowersOfTwo(t *testing.T) {
	tests := []struct {
		name     string
		n        int
		expected []uint64
	}{
		{"Basis Test 0", 0, []uint64{1}},
		{"Basis Test 1", 1, []uint64{1, 2}},
		{"Basis Test 4", 4, []uint64{1, 2, 4, 8, 16}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := PowersOfTwo(tt.n)
			if !slicesEqual(result, tt.expected) {
				t.Errorf("For %v: got %v, expected %v", tt.name, result, tt.expected)
			}
		})
	}
}

func slicesEqual(a, b []uint64) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
