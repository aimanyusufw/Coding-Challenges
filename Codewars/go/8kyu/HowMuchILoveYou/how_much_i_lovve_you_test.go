package howmuchiloveyou

import "testing"

func TestHowMuchILoveYou(t *testing.T) {
	tests := []struct {
		name     string
		i        int
		expected string
	}{
		{"Basic Testing", 7, "I love you"},
		{"Basic Testing", 3, "a lot"},
		{"Basic Testing", 6, "not at all"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := HowMuchILoveYou(tt.i)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
