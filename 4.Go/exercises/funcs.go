package main

import (
	"fmt"
	"math/rand"
)

func main() {
	greet("Admin")

	fmt.Println(message("Functions Exercises!"))

	sum := addThreeNums(1, 2, 3)
	fmt.Println("Sum is: ", sum)

	randomNum := randomNum()
	fmt.Println("Random Number: ", randomNum)

	num1, num2 := randomNums()
	fmt.Println("One Random Num: ", num1, "\nSecond Random Num: ", num2)

}

func greet(name string) {
	fmt.Println("Hello there, ", name)
}

func message(message string) string {
	return message
}

func addThreeNums(num1, num2, num3 int) int {
	return num1 + num2 + num3
}

func randomNum() int {
	return rand.Intn(100)
}

func randomNums() (int, int) {
	return rand.Intn(200), rand.Intn(100)
}
