package partlist

import (
	"testing"
)

func TestPartList(t *testing.T) {
	tests := []struct {
		name     string
		arr      []string
		expected string
	}{
		{"Basic Testing", []string{"I", "wish", "I", "hadn't", "come"},
			"(I, wish I hadn't come)(I wish, I hadn't come)(I wish I, hadn't come)(I wish I hadn't, come)"},
		{"Basic Testing", []string{"cdIw", "tzIy", "xDu", "rThG"},
			"(cdIw, tzIy xDu rThG)(cdIw tzIy, xDu rThG)(cdIw tzIy xDu, rThG)"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := PartList(tt.arr)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
