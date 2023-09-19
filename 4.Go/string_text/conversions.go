package string_text

import (
	"fmt"
	"strconv"
)

func Conversions() {
	// convert string to number
	var converted, _ = strconv.Atoi("10")

	fmt.Println(converted)
}
