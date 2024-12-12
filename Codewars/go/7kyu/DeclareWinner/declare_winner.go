// Codewars 4
// Title :	Two fighters, one winner
// Question :	Create a function that returns the name of the winner in a fight between two fighters.
// Challange Url :	https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/go
// Level : 7kyu

package declarewinner

type Fighter struct {
	Name            string
	Health          int
	DamagePerAttack int
}

// method 1
func DeclareWinner(fighter1 Fighter, fighter2 Fighter, firstAttacker string) string {
	attacker := &fighter1
	defender := &fighter2
	if firstAttacker == fighter2.Name {
		attacker, defender = defender, attacker
	}
	for {
		defender.Health -= attacker.DamagePerAttack
		if defender.Health <= 0 {
			return attacker.Name
		}
		attacker, defender = defender, attacker
	}
}

// method 2

// other user method
// func DeclareWinner(a Fighter, b Fighter, f string) string {
// 	if b.Name == f {
// 		a, b = b, a
// 	}
// 	if (b.Health/a.DamagePerAttack) < (a.Health/b.DamagePerAttack) || (b.Health/a.DamagePerAttack) == (a.Health/b.DamagePerAttack) && a.Health%b.DamagePerAttack != 0 {
// 		return a.Name
// 	} else {
// 		return b.Name
// 	}
// }
