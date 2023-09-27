package errors

import (
	"bufio"
	"fmt"
	"os"
)

func ReturnError() {
	files, err := os.ReadDir(".")

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	for _, file := range files {
		fmt.Println(file.Name())
	}
}

func proverbs(name string) error {
	f, err := os.Create(name)
	if err != nil {
		return err
	}
	defer f.Close()

	_, err = fmt.Fprintln(f, "Errors are values")
	if err != nil {
		return err
	}

	_, err = fmt.Fprintln(f, "Don’t just check errors, handle them gracefully.")

	if err != nil {
		return err
	}

	return nil
}

func WritingToFile() {
	err := proverbs("proverbs.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	file, err := os.Open("proverbs.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}
