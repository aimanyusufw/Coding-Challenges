package otherangle

import (
	"reflect"
	"testing"
)

func TestOtherAngle(t *testing.T) {
	tests := []struct {
		name     string
		a        int
		b        int
		expected int
	}{
		{"Testing 1", 20, 40, 120},
		{"Testing 2", 90, 20, 70},
		{"Testing 3", 30, 30, 120},
		{"Testing 4", 60, 60, 60},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := OtherAngle(tt.a, tt.b)
			if !reflect.DeepEqual(result, tt.expected) {
				t.Errorf("OtherAngle(%d,%d) = %v; want %v", tt.a, tt.b, result, tt.expected)
			}
		})
	}
}
