package collections

import (
	"fmt"
	"math"
	"strings"
	"unicode"
)

func DecMaps() {
	temperature := map[string]int{
		"Earth": 21,
		"Mars":  100,
	}

	// order is not guaranteed when iterating over maps
	for key, value := range temperature {
		fmt.Println(key, "->", value, "degrees")
	}

	// comma, ok syntax
	if moon, ok := temperature["Moon"]; ok {
		fmt.Println("Moon temperature:", moon)
	} else {
		fmt.Println("No moon temperature recorded!")
	}

	temperatures := []float64{-28.0, 32.0, -31.0, -29.0, -23.0, -29.0, -28.0, -33.0}

	frequency := make(map[float64]int)

	for _, t := range temperatures {
		frequency[t] += 1
	}

	fmt.Println(frequency)

	// in 10 degree interval
	interval10 := make(map[float64][]float64)

	for _, t := range temperatures {
		bound := math.Trunc(t/10) * 10
		interval10[bound] = append(interval10[bound], t)
	}

	fmt.Println(interval10)
}

func removePunctuation(r rune) bool {
	return !unicode.IsLetter(r) && !unicode.IsNumber(r)
}

func WordCounter() {
	const passage = "As far as eye could reach he saw nothing but the stems of the great plants about him receding in the violet shade, and far overhead the multiple transparency of huge leaves filtering the sunshine to the solemn splendour of twilight in which he walked. Whenever he felt able he ran again; the ground continued soft and springy, covered with the same resilient weed which was the first thing his hands had touched in Malacandra. Once or twice a small red creature scuttled across his path, but otherwise there seemed to be no life stirring in the wood; nothing to fear—except the fact of wandering unprovisioned and alone in a forest of unknown vegetation thousands or millions of miles beyond the reach or knowledge of man."

	var parsedPassage = strings.FieldsFunc(strings.ToLower(passage), removePunctuation)

	var wordCount = make(map[string]int)
	var moreThanOne = make(map[string]int)

	for word := range parsedPassage {
		wordCount[parsedPassage[word]]++
	}

	for word := range wordCount {
		if wordCount[word] > 1 {
			moreThanOne[word] = wordCount[word]
		}
	}

	fmt.Println(moreThanOne)

}
