package godetails

import (
	"bytes"
	"fmt"
	"strings"
	"unicode/utf8"
)

func StringProps() {
	s := "hello, world"
	fmt.Println(s[0], s[4])                 // prints unicode of 'h' and 'o'
	fmt.Println(string(s[0]), string(s[4])) // prints 'h' and 'o'

	// slicing
	fmt.Println(s[:5]) // prints 'hello'
}

func StringProcessing() {
	s := "Hello, 世界"
	fmt.Println(len(s)) // 13 bytes

	fmt.Println(utf8.RuneCountInString(s)) // 9 runes

	// decoding
	for i, r := range s {
		fmt.Printf("Size: %d, Rune: %c\n", i, r)
	}

	// outputting runes
	program := "プログラム"
	fmt.Println(program)

	fmt.Printf("% x\n", program) // hexadecimal representation

	r := []rune(program)
	fmt.Printf("%x\n", r) //  unicode format

	fmt.Println(string(r)) // prints original
}

func StringManipulation() {
	// four main manipulation packafes: strings, strconv,  bytes, and unicode
	// strings are immutable
	s := "Hello"
	//  s[2] = "A" // panic

	//  insert  a comma  every thrid place
	fmt.Println(insertComma(s))

	// removing directories paths
	fmt.Println(baseName("user/desktop/main.go"))

	// strings and bytes
	b := []byte(s)
	fmt.Println(b)

	// bytes are mutable
	b[0] = 'A'

	fmt.Println(string(b), s)

	// buffer method in bytes
	fmt.Println(enhancedCommaInsertor("1234567"))
}

func StringAnagrams(s1, s2 string) {
	s1 = strings.ToLower(s1)
	s2 = strings.ToLower(s2)

	sum1, sum2 := 0, 0

	for _, b := range s1 {
		sum1 += int(b)
	}

	for _, b := range s2 {
		sum2 += int(b)
	}

	if sum1 == sum2 {
		fmt.Println(s1, "and", s2, "are anagrams")
		return
	}

	fmt.Println(s1, "and", s2, "are not anagrams")
}

func enhancedCommaInsertor(s string) string {
	var buf bytes.Buffer
	stringLength := len(s)

	if stringLength <= 3 {
		return s
	}

	for i, v := range s {
		buf.WriteRune(v)

		remDigits := s[i+1:]

		if len(remDigits)%3 == 0 && len(remDigits) != 0 {
			buf.WriteByte(',')
		}
	}

	return buf.String()
}

func baseName(path string) string {
	// remove all slashes
	slash := strings.LastIndex(path, "/") //  returns -1 if not present
	path = path[slash+1:]

	if period := strings.LastIndex(path, "."); period >= 0 {
		path = path[:period]
	}

	return path

}

func insertComma(s string) string {
	n := len(s)
	if n <= 3 {
		return s
	}
	return insertComma(s[:n-3]) + "," + s[n-3:]
}

func RemoveSliceElements(slice []int, pos int) []int {
	copy(slice[pos:], slice[pos+1:])
	return slice[:len(slice)-1]
}
