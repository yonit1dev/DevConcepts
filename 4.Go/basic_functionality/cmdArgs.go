package basicfunctionality

import (
	"fmt"
	"os"
	"strings"
)

// Outputting command line arguments
func CommandLineArgs() {

	for i, arg := range os.Args[1:] {
		fmt.Printf("Index: %v and Argument: %v\n", i, arg)
	}

	// Improved Way
	fmt.Println("Enhanced Cmd Args:", strings.Join(os.Args[1:], " "))
}
