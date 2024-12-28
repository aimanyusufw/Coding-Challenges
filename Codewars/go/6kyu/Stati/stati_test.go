package stati

import "testing"

func TestStati(t *testing.T) {
	tests := []struct {
		name, str, expected string
	}{
		{"should handle basic cases", "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17",
			"Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"},
		{"should handle basic cases", "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41",
			"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Stati(tt.str)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
			t.Logf("Return %s", result)
		})
	}
}
