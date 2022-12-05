package main

import "fmt"

func main() {
	var favColor = "Black"
	fmt.Println("Fav Color: ", favColor)

	var birthYear, age = 2000, 21
	fmt.Println("Birthyear: ", birthYear, "\nAge: ", age)

	var (
		fInitial = "Y"
		lInitial = "A"
	)
	fmt.Println("Name Initials: ", fInitial, lInitial)

	var ageDays int
	ageDays = age * 365
	fmt.Println("Days Old: ", ageDays)

}
