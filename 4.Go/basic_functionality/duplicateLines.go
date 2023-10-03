package basicfunctionality

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func DuplicateLines() {
	counts := make(map[string]int)

	// bufio package to read
	input := bufio.NewScanner(os.Stdin)

	for input.Scan() {
		counts[input.Text()]++
	}

	if err := input.Err(); err != nil {
		fmt.Println("Error", input.Err().Error())
	}

	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}

func EnhancedDuplicateLines() {
	counts := make(map[string]int)
	files := os.Args[1:]
	if len(files) == 0 {
		countLines(os.Stdin, counts)
	} else {
		for _, arg := range os.Args[1:] {
			file, err := os.Open(arg)
			if err != nil {
				fmt.Printf("Error opening file: %v", err)
				continue
			}
			countLines(file, counts)
		}
	}
}

func countLines(f *os.File, counts map[string]int) {
	input := bufio.NewScanner(f)

	for input.Scan() {
		counts[input.Text()]++
	}
}

func SecondEnhancedDuplicateLines() {
	counts := make(map[string]int)

	if len(os.Args[1:]) < 1 {
		fmt.Println("Error: No file provided")
		os.Exit(1)
	}

	for _, filename := range os.Args[1:] {
		data, err := os.ReadFile(filename)

		if err != nil {
			fmt.Printf("Error reading file: %v", err)
			continue
		}

		for _, word := range strings.Split(string(data), " ") {
			counts[word]++
		}
	}

	for word, n := range counts {
		if n > 1 {
			fmt.Printf("Count: %d, Word: %s\n", n, word)
		}
	}
}
