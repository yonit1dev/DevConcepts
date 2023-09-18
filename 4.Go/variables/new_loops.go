package variables

import (
	"fmt"
	"time"
)

// short declaration doesn't work here

func NewLoops() {
	// count doesn't exist in this scope

	for count := 10; count > 0; count-- {
		fmt.Println("Count left: ", count)
		time.Sleep(time.Second)
	}

	// count is no longer in scope here
	fmt.Println("Count ended!")
}
