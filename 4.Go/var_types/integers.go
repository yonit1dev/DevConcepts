package var_types

import (
	"fmt"
	"math/big"
	"math/rand"
)

func Integers() {
	// wrap around effect of integers
	var x uint8 = 255

	var y uint8 = x + 1

	fmt.Printf("x: %v y: %v\n", x, y)
}

func ModPiggy() {
	const finalBalance = 20.00 * 100
	var initBalance = 0

	for initBalance < finalBalance {
		randomCoin := rand.Intn(3)

		switch randomCoin {
		case 0:
			if initBalance+5 >= finalBalance {
				initBalance = 20.00 * 100
				break
			}
			initBalance += 5
		case 1:
			if initBalance+10 >= finalBalance {
				initBalance = 20.00 * 100
				break
			}
			initBalance += 10
		case 2:
			if initBalance+10 >= finalBalance {
				initBalance = 20.00 * 100
				break
			}
			initBalance += 10
		default:
			initBalance += 0
		}

		fmt.Printf("Current balance: %v.%v\n", initBalance/100, initBalance%100)
	}
}

func BigNumbers() {
	// using the big package to declare quintillion numbers

	speed := big.NewInt(299792)
	secondsInDay := big.NewInt(86400)

	distance := new(big.Int)
	distance.SetString("24000000000000000000", 10)

	seconds := new(big.Int)
	seconds.Div(distance, speed)

	days := new(big.Int)
	days.Div(seconds, secondsInDay)

	fmt.Println("Time(in sec) it takes is:", seconds, "and time(in days) it takes is", days)
}
