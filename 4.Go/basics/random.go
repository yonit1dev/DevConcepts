package basics

import (
	"fmt"
	"math/rand"
)

func RandomNum() {
	var num = rand.Intn(10) + 1
	fmt.Println(num)

	num = rand.Intn(10) + 1
	fmt.Println(num)
}
