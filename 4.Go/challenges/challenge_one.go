package challenges

import (
	"fmt"
	"math/rand"
)

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
		return "Round-Trip"
	default:
		return "N/A"
	}
}

func randomSpeed() (speed int) {
	const minSpeed = 16
	const maxSpeed = 30

	return minSpeed + (rand.Intn(maxSpeed - minSpeed))
}

func calcDuration(speed int, distance int) (duration int) {
	return ((distance / speed) / 86400) // converting from seconds to days
}

func calcTicketPrice(speed int, tripType string) (ticketPrice int) {
	const priceFactor = 20

	if tripType == "Round-Trip" {
		return (priceFactor + speed) * 2
	}

	return priceFactor + speed
}

func TicketGenerator() {
	const distToMars = 62100000

	fmt.Println("Spaceline           Days     Trip-type     Price($m)")
	fmt.Println("====================================================")

	for count := 0; count < 10; count++ {
		spaceline := randomSpaceLine()
		speed := randomSpeed()
		tripType := randomTripType()
		days := calcDuration(speed, distToMars)
		price := calcTicketPrice(speed, tripType)

		fmt.Printf("%-20v %3v %14v %12v\n", spaceline, days, tripType, price)
	}

}
