package control

import (
	"fmt"
	"math/rand"
	"time"
)

func CountDown() {
	var timer = 10

	for timer > 0 {
		fmt.Println("Time left: ", timer)
		time.Sleep(time.Second)
		timer--
	}

	fmt.Println("Timer ended!")
}

func CountDownRandom() {
	var timer = 10

	for timer > 0 {
		fmt.Println("Time left: ", timer)
		time.Sleep(time.Second)
		if rand.Intn(100) == 7 {
			break
		}
		timer--
	}

	if timer == 0 {
		fmt.Println("Timer Ended!")
	} else {
		fmt.Printf("Timer failed at %v seconds!\n", timer)
	}
}
