package tonato

import "testing"

func TestToNato(t *testing.T) {
	tests := []struct {
		name, s, expected string
	}{
		{"Translate simple sentence", "If you can read", "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"},
		{"Translate complex sentence", "Did not see that coming", "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"},
		{"Handle punctuation", "go for it!", "Golf Oscar Foxtrot Oscar Romeo India Tango !"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ToNato(tt.s)
			if result != tt.expected {
				t.Errorf("Failed test '%s': got '%s', expected '%s'", tt.name, result, tt.expected)
			} else {
				t.Logf("Passed test '%s': got '%s'", tt.name, result)
			}
		})
	}
}
