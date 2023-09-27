package basicfunctionality

import (
	"fmt"
	"os"
)

func CommandLineArgs() {
	var s, sep string

	for i := 1; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}

	fmt.Println("Command Line Args:", s)
}
