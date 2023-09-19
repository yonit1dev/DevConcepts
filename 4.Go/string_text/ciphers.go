package string_text

import "fmt"

func Caesar() {
	const key = 3

	const cipher = "L fdph, L vdz, L frqtxhuhg"

	for i := 0; i < len(cipher); i++ {
		letter := cipher[i]

		if letter >= 'a' && letter <= 'z' {
			letter -= key

			if letter < 'a' {
				letter += 26
			}
		} else if letter >= 'A' && letter <= 'Z' {
			letter -= key

			if letter < 'A' {
				letter += 26
			}
		}

		if i == len(cipher)-1 {
			fmt.Printf("%c\n", letter)
		} else {
			fmt.Printf("%c", letter)
		}

	}
}
