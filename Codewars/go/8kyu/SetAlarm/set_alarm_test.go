package setalarm

import "testing"

func TestSetAlarm(t *testing.T) {
	tests := []struct {
		name     string
		employed bool
		vacation bool
		expect   bool
	}{
		{"Basic test", true, true, false},
		{"Basic test", false, true, false},
		{"Basic test", false, false, false},
		{"Basic test", true, false, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := SetAlarm(tt.employed, tt.vacation)
			if result != tt.expect {
				t.Errorf("Return %v excpect %v", result, tt.expect)
			}
		})
	}
}
