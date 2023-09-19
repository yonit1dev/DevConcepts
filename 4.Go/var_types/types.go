package var_types

import (
	"fmt"
	"math"
	"math/rand"
)

func PrecisionPoints() {
	/*
		Demonstrating the effect of floating point numbers on precision
		and rounding problems.
		Adding $0.10 to a bank account for example 10 times yields a different
		result than $1.
	*/

	var balance = 0.0

	for count := 0; count < 10; count++ {
		balance += 0.1
	}

	fmt.Println("Balance:", balance)        // this prints 0.9999999999999999
	fmt.Printf("Balance: %4.2f\n", balance) // this prints 1.00
}

func Piggy() {
	const finalBalance = 20.00
	var initBalance = 0.00
	fmt.Println(math.Abs(20 - 19.85))

	for initBalance < finalBalance {
		randomCoin := rand.Intn(3)

		switch randomCoin {
		case 0:
			initBalance += 0.05
		case 1:
			initBalance += 0.10
		case 2:
			initBalance += 0.25
		default:
			initBalance += 0.00
		}

		fmt.Printf("Current balance: %4.2f\n", initBalance)
	}

	fmt.Printf("Final balance: %4.2f\n", initBalance) // sometimes overflows
}
