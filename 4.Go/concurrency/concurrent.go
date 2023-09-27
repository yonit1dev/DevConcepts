package concurrency

import (
	"fmt"
	"time"
)

func sleepyGopher(id int) {
	time.Sleep(3 * time.Second)
	fmt.Println("....", id, " snore....")
}

func sleepyGopherChannel(id int, c chan int) {
	time.Sleep(3 * time.Second)
	fmt.Println("....", id, " snore....")
	c <- id
}

func Concurrent() {
	for i := 0; i < 5; i++ {
		go sleepyGopher(i)
	}
	time.Sleep(4 * time.Second)
}

func ChannelsCommunication() {
	c := make(chan int)

	for i := 0; i < 5; i++ {
		go sleepyGopherChannel(i, c)
	}

	for i := 0; i < 5; i++ {
		gopherID := <-c
		fmt.Println("gopher ", gopherID, " has finished sleeping")
	}
}
