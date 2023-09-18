package challenges

import (
	"fmt"
	"math/rand"
)

func printDivider() {
	var space = 45
	for space > 0 {
		if space == 1 {
			fmt.Print("=\n")
			break
		}
		fmt.Print("=")
		space--
	}
}

func randomSpaceLine() (spaceLine string) {
	switch num := rand.Intn(3); num {
	case 0:
		return "SpaceX"
	case 1:
		return "Virign Galactic"
	case 2:
		return "Space Adventures"
	default:
		return "N/A"
	}
}

func randomTripType() (tripType string) {
	switch num := rand.Intn(2); num {
	case 0:
		return "One Way"
	case 1:
		return "Round Trip"
	default:
		return "N/A"
	}
}

func generatePrototype() {
	fmt.Printf("%-20v %-5v %-12v %-5v\n", "Spaceline", "Days", "Trip-type", "Price")
	printDivider()

	var price, days int

	for count := 0; count < 10; count++ {
		price = rand.Intn(100)
		days = rand.Intn(50)
		var spaceLine = randomSpaceLine()
		var tripType = randomTripType()

		fmt.Printf("%-20v %4v %-13v $%4v\n", spaceLine, days, tripType, price)

	}
}

func TicketGenerator() {
	generatePrototype()
}
