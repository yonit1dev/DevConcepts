package string_text

import "fmt"

func Texts() {
	// back ticks for escaping characters
	fmt.Println(`
	This spans the first line.
	This spans the second line.
	`)
}

func Aliases() {
	// method of declaring custom typess
	type byte = uint8
	type rune = uint32

	var pi rune = 960    // pi symbol number in Unicode
	var alpha rune = 940 // alpha symbol number in Unicode
	var omega rune = 969 // omega symbol number in Unicode
	var bang byte = 33   // bang symbol number in Unicode

	fmt.Printf("%c, %c, %c, %c, %c\n", 65, pi, alpha, omega, bang)
}

func StringManipulation() {
	peace := "Peace"

	peace = "Hello"

	fmt.Printf("%v - %c\n", peace, peace[0])

	// ROT13 cipher
	message := "uv vagreangvbany fcnpr fgngvba"

	for i := 0; i < len(message); i++ {
		c := message[i]
		if c >= 'a' && c <= 'z' {
			c = c + 13
			if c > 'z' {
				c = c - 26
			}
		}
		fmt.Printf("%c", c)
	}
	fmt.Println("")
}
