package main

import "fmt"

func main() {

	var firstRune = 'f'
	var firstString = "string"
	var firstLiteral = `Let's code in "GoLang"\n`

	fmt.Println(firstRune)
	fmt.Println(firstLiteral)

	for _, char := range firstString {
		fmt.Println(char)
	}
}
