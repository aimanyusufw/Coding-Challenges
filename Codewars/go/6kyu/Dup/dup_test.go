package dup

import "testing"

func CheckValidSlice(arr1, arr2 []string) bool {
	if len(arr1) != len(arr2) {
		return true
	}
	for i, str := range arr1 {
		if str != arr2[i] {
			return true
		}
	}
	return false
}

func TestDup(t *testing.T) {
	tests := []struct {
		name          string
		arr, expected []string
	}{
		{"Simple test", []string{"ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"}, []string{"codewars", "picaniny", "hubububo"}},
		{"Simple test", []string{"abracadabra", "allottee", "assessee"}, []string{"abracadabra", "alote", "asese"}},
		{"Simple test", []string{"kelless", "keenness"}, []string{"keles", "kenes"}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Dup(tt.arr)
			if CheckValidSlice(tt.expected, result) {
				t.Errorf("Return %v expected %v", result, tt.expected)
			}
		})
	}
}
