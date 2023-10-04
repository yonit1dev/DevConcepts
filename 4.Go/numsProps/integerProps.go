package numsprops

import "fmt"

// function to illustrate some properties of integers in go
func IntegerProps() {
	// four main integer types, signed and unsigned
	var smallInt uint8
	var mediumInt uint16
	var bigInt uint32
	var veryBigInt uint64

	smallInt, mediumInt, bigInt, veryBigInt = 1, 2, 3, 4

	var negativeSmallInt int8 = -5

	fmt.Println(smallInt, mediumInt, bigInt, veryBigInt, negativeSmallInt)

	// integer overflowing, as shown below
	var u uint8 = 255 // uint8 holds numbers from 0 - 255
	fmt.Println(u, u+1, u*u)

}
