package control

import "fmt"

func Mountain() {
	var command = "go inside"

	if command == "go east" {
		fmt.Println("You head further up the mountain.")
	} else if command == "go inside" {
		fmt.Println("You head inside the cave where you live out the rest of your life.")
	} else {
		fmt.Println("Not quite there yet!")
	}
}
