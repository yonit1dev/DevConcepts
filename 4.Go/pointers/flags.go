package pointers

import (
	"flag"
	"fmt"
	"strings"
)

func EchoFlag() {
	var n = flag.Bool("n", false, "omit trailing newline")
	var sep = flag.String("sep", " ", "separator")

	flag.Parse()
	fmt.Print(strings.Join(flag.Args(), *sep))

	if !*n {
		fmt.Println()
	}
}
