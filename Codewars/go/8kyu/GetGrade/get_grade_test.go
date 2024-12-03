package getgrade

import "testing"

func TestGetGrade(t *testing.T) {
	tests := []struct {
		name     string
		score1   int
		score2   int
		score3   int
		expected rune
	}{
		{"Perfect scores", 100, 100, 100, 'A'},
		{"High average", 85, 90, 87, 'B'},
		{"Medium average", 75, 70, 73, 'C'},
		{"Low average", 60, 65, 63, 'D'},
		{"Failing average", 50, 55, 58, 'F'},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := GetGrade(tt.score1, tt.score2, tt.score3)
			if result != tt.expected {
				t.Errorf("GetGrade(%d, %d, %d) = %c; want %c", tt.score1, tt.score2, tt.score3, result, tt.expected)
			}
		})
	}
}
