package main

import "fmt"

func main() {
	fmt.Println("Hello, from Go!")

	var bigInt int64

	bigInt = 3408932832893892

	fmt.Println(bigInt)

	type UserId int64
	type Speed float64
	type Velocity Speed

	var myUserID UserId = 320309209320

	var (
		a int = 1
		b int = 2
		c     = a + b
	)

	a, b = b, a

	fmt.Println(a, b)

	fmt.Println("The sum of a and b is: ", c)

	fmt.Println(myUserID)

	fmt.Println(newFunction("New String"))

	sum := sumNums(5, 10)

	fmt.Println(sum)
}

func newFunction(text string) string {
	return text
}

func sumNums(a, b int) int {
	return a + b
}
