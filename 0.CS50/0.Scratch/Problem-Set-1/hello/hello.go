package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	var user_name string

	fmt.Print("Please input your name: ")

	reader := bufio.NewReader(os.Stdin)
	line_text, err := reader.ReadString('\n')

	if err != nil {
		log.Fatalf("Something went wrong. Error: %s", err)
	}

	user_name = line_text
	fmt.Print("Hello, ", user_name)

}
