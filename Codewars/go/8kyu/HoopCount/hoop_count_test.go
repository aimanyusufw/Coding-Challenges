package hoopcount

import "testing"

func TestHoopCount(t *testing.T) {
	tests := []struct {
		name   string
		n      int
		expect string
	}{

		{"Basuc Testing", 3, "Keep at it until you get it"},
		{"Basuc Testing", 12, "Great, now move on to tricks"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := HoopCount(tt.n)
			if result != tt.expect {
				t.Errorf("retutn %s expected %s", result, tt.expect)
			}
		})
	}
}
