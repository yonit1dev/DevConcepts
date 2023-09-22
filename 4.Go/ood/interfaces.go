package ood

import "fmt"

type martian struct{}

func (m martian) talk() string {
	return "nack nack"
}

type laser struct{}

func (l laser) talk() string {
	return "pew pew"
}

func Interfaces() {
	var t interface {
		talk() string
	}

	// both are valid as they satisfy the interface (having a talk method with no parameters and returns a string)
	t = martian{}
	fmt.Println(t.talk())

	t = laser{}
	fmt.Println(t.talk())
}
