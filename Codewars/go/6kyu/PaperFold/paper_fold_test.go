package paperfold

import "testing"

func TestPaperFoldSequence(t *testing.T) {
	expected := []int{1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1}
	result := []int{}
	ch := make(chan int, 100)
	go PaperFold(ch)
	for i := 0; i < 20; i++ {
		result = append(result, <-ch)
	}
	if len(result) != len(expected) {
		t.Fatalf("Result length mismatch: got %d, expected %d", len(result), len(expected))
	}
	for i, v := range result {
		if v != expected[i] {
			t.Errorf("Mismatch at index %d: got %d, expected %d", i, v, expected[i])
		}
	}
}
