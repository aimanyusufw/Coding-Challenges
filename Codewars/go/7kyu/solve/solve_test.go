package solve

import "testing"

func TestSolve(t *testing.T) {
	tests := []struct {
		name     string
		slice    []string
		expected []int
	}{
		{"Basic Test", []string{"abode", "ABc", "xyzD"}, []int{4, 3, 1}},
		{"Basic Test", []string{"abide", "ABc", "xyz"}, []int{4, 3, 0}},
		{"Basic Test", []string{"IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"}, []int{6, 5, 7}},
		{"Basic Test", []string{"encode", "abc", "xyzD", "ABmD"}, []int{1, 3, 1, 3}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := solve(tt.slice)
			if CheckSlice(result, tt.expected) {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}

func CheckSlice(slice, equal []int) bool {
	for i, s := range slice {
		if s != equal[i] {
			return true
		}
	}
	return false
}
