package findchildren

import "testing"

func TestFindChildren(t *testing.T) {
	tests := []struct {
		name, str, expected string
	}{
		{"Simple test", "abBA", "AaBb"},
		{"Simple test", "AaaaaZazzz", "AaaaaaZzzz"},
		{"Simple test", "CbcBcbaA", "AaBbbCcc"},
		{"Simple test", "xXfuUuuF", "FfUuuuXx"},
		{"Simple test", "", ""},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := FindChildren(tt.str)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
