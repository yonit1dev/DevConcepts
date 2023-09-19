package challenges

import (
	"fmt"
)

func generateKey(text string, keyword string) (key string) {
	var repeatKey = len(text) / len(keyword)

	for i := 0; i < repeatKey; i++ {
		key += keyword
	}

	if len(text)%len(keyword) == 0 {
		return key
	} else {
		for i := 0; i < repeatKey; i++ {
			key += string(keyword[i])
		}
		return key
	}

}

func VigenereCipher() {
	const plainText = "CSOITEUIWUIZNSROCNKFD"
	const key = "GOLANG"

	var generatedKey = generateKey(plainText, key)

	var cipher string

	for i := 0; i < len(plainText); i++ {
		c := ((plainText[i] + generatedKey[i]) % 26) + 'A'

		cipher += string(c)
	}

	fmt.Println("Cipher:", cipher)
}
