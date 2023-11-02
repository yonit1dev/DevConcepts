package godetails

import (
	"fmt"
	"time"
)

// Field order is important when declaring structs
type employee struct {
	ID        int
	Name      string
	Address   string
	DoB       time.Time
	Position  string
	Salary    float64
	ManagerID int
}

func StructProps() {
	var dilbert employee

	dilbert.Name = "Dilbert Someone"
	dilbert.Salary = 5000

	position := &dilbert.Position
	*position = "Senior" + *position

	fmt.Println(dilbert)

	someone := &employee{
		ID:        1,
		Name:      "Someone Person",
		Address:   "Somewhere",
		DoB:       time.Now(),
		Position:  "Junior",
		Salary:    4000,
		ManagerID: 204,
	}

	fmt.Println(someone)
}

func EmbeddingStructs() {
	type point struct {
		X, Y int
	}

	type circle struct {
		point
		Radius int
	}

	type wheel struct {
		circle
		Spokes int
	}

	var w wheel
	w.X = 8
	w.Y = 8
	w.Radius = 20
	w.Spokes = 10

}

// Insertion Sort using Binary Tree
type tree struct {
	value       int
	left, right *tree
}

func InsertionSort(values []int) {
	var root *tree
	for _, v := range values {
		root = add(root, v)
	}

	appendValues(values[:0], root)
}

// creates a new sorted slice
func appendValues(values []int, t *tree) []int {
	if t != nil {
		values = appendValues(values, t.left)
		values = append(values, t.value)
		values = appendValues(values, t.right)
	}

	return values
}

// adds value to the left and right of a value
func add(t *tree, value int) *tree {
	if t == nil {
		return &tree{value: value}
	}

	if value < t.value {
		t.left = add(t.left, value)
	}

	if value > t.value {
		t.right = add(t.right, value)
	}

	return t
}
