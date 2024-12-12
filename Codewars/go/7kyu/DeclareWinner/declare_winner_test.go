package declarewinner

import "testing"

func TestDeclareWinner(t *testing.T) {

	tests := []struct {
		name          string
		fighter1      Fighter
		fighter2      Fighter
		firstAttacker string
		expected      string
	}{
		{"Basic testing", Fighter{"Lew", 10, 2}, Fighter{"Harry", 5, 4}, "Lew", "Lew"},
		{"Basic testing", Fighter{"Lew", 10, 2}, Fighter{"Harry", 5, 4}, "Harry", "Harry"},
		{"Basic testing", Fighter{"Harald", 20, 5}, Fighter{"Harry", 5, 4}, "Harry", "Harald"},
		{"Basic testing", Fighter{"Harald", 20, 5}, Fighter{"Harry", 5, 4}, "Harald", "Harald"},
		{"Basic testing", Fighter{"Jerry", 30, 3}, Fighter{"Harald", 20, 5}, "Jerry", "Harald"},
		{"Basic testing", Fighter{"Jerry", 30, 3}, Fighter{"Harald", 20, 5}, "Harald", "Harald"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := DeclareWinner(tt.fighter1, tt.fighter2, tt.firstAttacker)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
