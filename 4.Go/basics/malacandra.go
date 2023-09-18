package basics

import "fmt"

func Malacandra() {
	const distance = 56000000
	const days = 28
	const hoursInDay = 24

	const speed = distance / (days * hoursInDay)

	fmt.Printf("The speed it takes to reach % v is %v km/hr.\n", "Malacandra", speed)
}
