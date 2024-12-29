package nbmonths

import "testing"

func TestNbMonths(t *testing.T) {
	tests := []struct {
		name                                         string
		startPriceOld, startPriceNew, savingperMonth int
		percentLossByMonth                           float64
		exp                                          [2]int
	}{
		{"should handle basic cases", 2000, 8000, 1000, 1.5, [2]int{6, 766}},
		{"should handle basic cases", 12000, 8000, 1000, 1.5, [2]int{0, 4000}},
		{"should handle basic cases", 8000, 12000, 500, 1.0, [2]int{8, 597}},
		{"should handle basic cases", 18000, 32000, 1500, 1.25, [2]int{8, 332}},
		{"should handle basic cases", 7500, 32000, 300, 1.55, [2]int{25, 122}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := NbMonths(tt.startPriceOld, tt.startPriceNew, tt.savingperMonth, tt.percentLossByMonth)
			if result != tt.exp {
				t.Errorf("Return %v expected %v", result, tt.exp)
			}
			t.Logf("Return %v", result)
		})
	}
}
