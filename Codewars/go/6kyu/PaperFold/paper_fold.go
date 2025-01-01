// Codewars 17
// Title :	The PaperFold sequence
// Question :	Define a generator PaperFold that sequentially generates the values of this sequence
// Challange Url :	https://www.codewars.com/kata/5d26721d48430e0016914faa/train/go
// Level : 6kyu

package paperfold

// method 1
func PaperFold(ch chan<- int) {
	ch <- 1

	p := make(chan int)
	go PaperFold(p)

	for {
		ch <- <-p
		ch <- 0
		ch <- <-p
		ch <- 1
	}
}

// method 2

// other user method
// func PaperFold(ch chan<- int) {
// 	ch <- 1

// 	p := make(chan int)
// 	go PaperFold(p)

// 	for true {
// 		ch <- <-p
// 		ch <- 0
// 		ch <- <-p
// 		ch <- 1
// 	}
// }
