package twiceasold

import "testing"

func TestTwiceAsOld(t *testing.T) {
	tests := []struct {
		name        string
		dadYearsOld int
		sonYearsOld int
		expected    int
	}{
		{"Basic Testing", 36, 7, 22},
		{"Basic Testing", 55, 30, 5},
		{"Basic Testing", 42, 21, 0},
		{"Basic Testing", 22, 1, 20},
		{"Basic Testing", 29, 0, 29},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := TwiceAsOld(tt.dadYearsOld, tt.sonYearsOld)
			if result != tt.expected {
				t.Errorf("return %d expected %d", result, tt.expected)
			}
		})
	}
}
