package basics

import "fmt"

func CalcTimeToMars() {
	// const values can't be reassigned
	const lightSpeed = 299792
	var distance = 56000000

	fmt.Printf("The time it takes from %v to %v is %v seconds.\n", "Earth", "Mars", distance/lightSpeed)

	// reassigning var values
	distance = 401000000
	fmt.Printf("The time it takes from %v to %v is %v seconds.\n", "Earth", "Mars", distance/lightSpeed)
}

func TimeToMars2() {
	const (
		lightSpeed     = 100800
		distanceToMars = 96300000
		oneDayInHr     = 24
	)

	const days = (distanceToMars / lightSpeed) / oneDayInHr

	fmt.Printf("The time it takes from %v to %v is %v days.\n", "Earth", "Mars", days)
}
