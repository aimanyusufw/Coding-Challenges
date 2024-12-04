package monkeycount

import (
	"reflect"
	"testing"
)

func TestGetGrade(t *testing.T) {
	tests := []struct {
		name     string
		monkey   int
		expected []int
	}{
		{"Monkey Count 1", 1, []int{1}},
		{"Monkey Count 2", 2, []int{1, 2}},
		{"Monkey Count 3", 3, []int{1, 2, 3}},
		{"Monkey Count 4", 4, []int{1, 2, 3, 4}},
		{"Monkey Count 5", 5, []int{1, 2, 3, 4, 5}},
		{"Monkey Count 6", 6, []int{1, 2, 3, 4, 5, 6}},
		{"Monkey Count 7", 7, []int{1, 2, 3, 4, 5, 6, 7}},
		{"Monkey Count 8", 8, []int{1, 2, 3, 4, 5, 6, 7, 8}},
		{"Monkey Count 9", 9, []int{1, 2, 3, 4, 5, 6, 7, 8, 9}},
		{"Monkey Count 10", 10, []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := monkeyCount(tt.monkey)
			if !reflect.DeepEqual(result, tt.expected) {
				t.Errorf("monkeyCount(%d) = %v; want %v", tt.monkey, result, tt.expected)
			}
		})
	}
}
