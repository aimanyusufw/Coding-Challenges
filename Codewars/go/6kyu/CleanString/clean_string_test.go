package cleanstring

import (
	"testing"
	"time"
)

func TestCleanString(t *testing.T) {
	tests := []struct {
		name, str, expected string
	}{
		{"Basic testing", "abc#d##c", "ac"},
		{"Basic testing", "abc####d##c#", ""},
		{"Basic testing", "", ""},
		{"Basic testing", "#######", ""},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			start := time.Now()
			result := CleanString(tt.str)
			duration := time.Since(start)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
			t.Logf("Return %s duration %v", result, duration)
		})
	}
}
