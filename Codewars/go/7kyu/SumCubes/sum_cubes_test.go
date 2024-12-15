package sumcubes

import "testing"

func TestSumCubes(t *testing.T) {
	basiccc := [...]int{1, 2, 3, 4, 10, 123}
	shouldbe := [...]int{1, 9, 36, 100, 3025, 58155876}

	for i, v := range basiccc {
		t.Run("Basic testing", func(t *testing.T) {
			result := SumCubes(v)
			if result != shouldbe[i] {
				t.Errorf("Return %d expected %d", result, shouldbe[i])
			}
		})
	}
}
