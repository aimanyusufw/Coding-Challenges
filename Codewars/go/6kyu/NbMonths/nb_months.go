// Codewars 13
// Title :	Buy a car
// Question :	How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
// Challange Url :		https://www.codewars.com/kata/554a44516729e4d80b000012/train/go
// Level : 6kyu

package nbmonths

// method 1
func NbMonths(startPriceOld, startPriceNew, savingperMonth int, percentLossByMonth float64) [2]int {
	if startPriceOld > startPriceNew || startPriceNew == startPriceOld {
		return [2]int{0, startPriceOld - startPriceNew}
	}
	month := 0
	available := 0.0
	oldPrice, newPrice := float64(startPriceOld), float64(startPriceNew)
	for available <= 0 {
		month++
		if month%2 == 0 {
			percentLossByMonth += 0.5
		}
		oldPrice *= (1 - percentLossByMonth/100)
		newPrice *= (1 - percentLossByMonth/100)
		available = float64(savingperMonth*month) + oldPrice - newPrice
	}
	if available > float64(int(available)) {
		available += 0.5
	}
	return [2]int{month, int(available)}
}

// method 2

// other user method
// func NbMonths(startPriceOld, startPriceNew, savingperMonth int, percentLossByMonth float64) [2]int {
// 	months := 0
// 	priceOld := float64(startPriceOld)
// 	priceNew := float64(startPriceNew)

// 	for ; priceOld+float64(months*savingperMonth) < priceNew; months++ {
// 		if months%2 == 1 {
// 			percentLossByMonth += 0.5
// 		}
// 		priceOld -= priceOld * percentLossByMonth / 100.0
// 		priceNew -= priceNew * percentLossByMonth / 100.0
// 	}

// 	return [2]int{months, int(priceOld + float64(months*savingperMonth) - priceNew + 0.5)}
// }
