package toalternatingcase

import "testing"

func TestToAlternativeCase(t *testing.T) {
	tests := []struct {
		name     string
		str      string
		expected string
	}{
		{"Basic Testing", "hello world", "HELLO WORLD"},
		{"Basic Testing", "HELLO WORLD", "hello world"},
		{"Basic Testing", "hello WORLD", "HELLO world"},
		{"Basic Testing", "HeLLo WoRLD", "hEllO wOrld"},
		{"Basic Testing", "12345", "12345"},
		{"Basic Testing", "1a2b3c4d5e", "1A2B3C4D5E"},
		{"Basic Testing", "String.prototype.toAlternatingCase", "sTRING.PROTOTYPE.TOaLTERNATINGcASE"},
		{"Basic Testing", "altERnaTIng cAsE", "ALTerNAtiNG CaSe"},
		{"Basic Testing", "ALTerNAtiNG CaSe", "altERnaTIng cAsE"},
		{"Basic Testing", "altERnaTIng cAsE <=> ALTerNAtiNG CaSe", "ALTerNAtiNG CaSe <=> altERnaTIng cAsE"},
		{"Basic Testing", "ALTerNAtiNG CaSe <=> altERnaTIng cAsE", "altERnaTIng cAsE <=> ALTerNAtiNG CaSe"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := ToAlternatingCase(tt.str)
			if result != tt.expected {
				t.Errorf("Expected %s return %s", tt.expected, result)
			}
		})
	}
}
