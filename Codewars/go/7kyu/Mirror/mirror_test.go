package mirror

import "testing"

func TestOper(t *testing.T) {
	tests := []struct {
		name, x, expected string
		f                 FParam
	}{
		{"should handle basic cases Oper VertMirror", "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu", "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw", VertMirror},
		{"should handle basic cases Oper HorMirror", "lVHt\nJVhv\nCSbg\nyeCt", "yeCt\nCSbg\nJVhv\nlVHt", HorMirror},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := Oper(tt.f, tt.x)
			if result != tt.expected {
				t.Errorf("Return %s expected %s", result, tt.expected)
			}
		})
	}
}
