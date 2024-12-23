package invitemorewomen

import "testing"

func TestInviteMoreWomen(t *testing.T) {
	tests := []struct {
		name     string
		L        []int
		expected bool
	}{
		{"Basic testing", []int{1, -1, 1}, true},
		{"Basic testing", []int{1, 1, 1}, true},
		{"Basic testing", []int{-1, -1, -1}, false},
		{"Basic testing", []int{1, -1}, false},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := inviteMoreWomen(tt.L)
			if result != tt.expected {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
