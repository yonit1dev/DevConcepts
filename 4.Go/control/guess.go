package control

import (
	"fmt"
	"math/rand"
	"time"
)

func Guess() {
	const userPick = 7
	var computerGuess int

	for computerGuess != userPick {
		computerGuess = rand.Intn(100) + 1
		var proximity string

		if computerGuess > userPick {
			proximity = "higher"
		} else if computerGuess < userPick {
			proximity = "lower"
		} else {
			break
		}

		fmt.Printf("I guessed %v but I think my guess was %v.\n", computerGuess, proximity)
		time.Sleep(time.Second)
	}

	fmt.Println("Your number is: ", computerGuess)
}
