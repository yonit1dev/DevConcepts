package control

import "fmt"

func Switch() {
	var room = "lake"

	switch room {
	case "cave":
		fmt.Println("You find yourself in a dimly lit cavern.")
	case "lake":
		fmt.Println("The ice seems solid enough.")
		fallthrough // runs the next case
	case "underwater":
		fmt.Println("The water is freezing cold.")
	default:
		fmt.Println("Go ahead!")
	}
}
