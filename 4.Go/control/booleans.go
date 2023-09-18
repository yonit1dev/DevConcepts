package control

import (
	"fmt"
	"strings"
)

func Cave() {
	fmt.Println("You find yourself in a dimly lit cavern.")

	var command = "walk outside"
	var exit = strings.Contains(command, "outside")

	fmt.Println("You leave the cave: ", exit)
}
