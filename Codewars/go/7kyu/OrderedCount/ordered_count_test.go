package orderedcount

import (
	"reflect"
	"testing"
)

func TestOrderedCount(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected []Tuple
	}{
		{
			name:  "Basic case 1",
			input: "abracadabra",
			expected: []Tuple{
				{'a', 5}, {'b', 2}, {'r', 2}, {'c', 1}, {'d', 1},
			},
		},
		{
			name:  "Basic case 2",
			input: "Code Wars",
			expected: []Tuple{
				{'C', 1}, {'o', 1}, {'d', 1}, {'e', 1}, {' ', 1}, {'W', 1}, {'a', 1}, {'r', 1}, {'s', 1},
			},
		},
		{
			name:     "Empty string",
			input:    "",
			expected: []Tuple{},
		},
		{
			name:  "Repeated characters",
			input: "aaaa",
			expected: []Tuple{
				{'a', 4},
			},
		},
		{
			name:  "Mixed repeated characters",
			input: "abcabcabc",
			expected: []Tuple{
				{'a', 3}, {'b', 3}, {'c', 3},
			},
		},
		{
			name:  "Case sensitivity",
			input: "AaBbCc",
			expected: []Tuple{
				{'A', 1}, {'a', 1}, {'B', 1}, {'b', 1}, {'C', 1}, {'c', 1},
			},
		},
		{
			name:  "Special characters and spaces",
			input: "Hello, World!",
			expected: []Tuple{
				{'H', 1}, {'e', 1}, {'l', 3}, {'o', 2}, {',', 1}, {' ', 1}, {'W', 1}, {'r', 1}, {'d', 1}, {'!', 1},
			},
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := OrderedCount(test.input)
			if !reflect.DeepEqual(result, test.expected) {
				t.Errorf("For input '%s', expected %v but got %v", test.input, test.expected, result)
			}
		})
	}
}
