package quarterof

import (
	"reflect"
	"testing"
)

func TestQuarterOf(t *testing.T) {
	tests := []struct {
		name   string
		month  int
		expect int
	}{
		{"Testing 1", 3, 1},
		{"Testing 2", 8, 3},
		{"Testing 3", 11, 4},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := QuarterOf(tt.month)
			if !reflect.DeepEqual(result, tt.expect) {
				t.Errorf("monkeyCount(%d) = %v; want %v", tt.month, result, tt.expect)
			}
		})
	}
}
