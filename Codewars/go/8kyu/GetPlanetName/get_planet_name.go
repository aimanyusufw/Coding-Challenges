// Codewars 12
// Title :	Get planet name by id
// Question :	The function is not returning the correct values. Can you figure out why?
// Challange Url :	https://www.codewars.com/kata/515e188a311df01cba000003/train/go
// Level : 8kyu

package getplanetname

// method 1
func GetPlanetName(ID int) string {
	switch ID {
	case 1:
		return "Mercury"
	case 2:
		return "Venus"
	case 3:
		return "Earth"
	case 4:
		return "Mars"
	case 5:
		return "Jupiter"
	case 6:
		return "Saturn"
	case 7:
		return "Uranus"
	case 8:
		return "Neptune"
	default:
		return "Pluto"
	}
}

// method 2

// other user method
// var galaxy = []string{"Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"}

// func GetPlanetName(ID int) string {
// 	return galaxy[ID-1]
// }
