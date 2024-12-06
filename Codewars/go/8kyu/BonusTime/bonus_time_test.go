package bonustime

import "testing"

func TestBonusTime(t *testing.T) {
	tests := []struct {
		name     string
		salary   int
		bonus    bool
		expected string
	}{
		{"Does not add a bonus if undeserved", 100, false, "£100"},
		{"Does not add a bonus if undeserved", 9, false, "£9"},
		{"Does not add a bonus if undeserved", 500, false, "£500"},
		{"Adds a bonus if deserved", 1000, true, "£10000"},
		{"Adds a bonus if deserved", 14000, true, "£140000"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := BonusTime(tt.salary, tt.bonus)
			if result != tt.expected {
				t.Errorf("Function BonusTime(%d,%v) return %s expected %s", tt.salary, tt.bonus, result, tt.expected)
			}
		})
	}
}
