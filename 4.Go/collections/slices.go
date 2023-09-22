package collections

import (
	"fmt"
	"strings"
)

func Slices() {
	allPlanets := [...]string{
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune",
	}

	terrestrial := allPlanets[:4]
	fmt.Println(terrestrial)

	// slices can modify the original array
	terrestrial[0] = "New Planet"

	// Replaces Mercury with New Planet
	fmt.Println(allPlanets)

	// declaring a slice, slices don't have their length attached to their type
	var slicePlanets []string
	var arrayPlanets [8]string
	fmt.Printf("%T\n", slicePlanets) // prints slice
	fmt.Printf("%T\n", arrayPlanets) // prints the length with it so an array

	// slices use the same underlying data
	spacedPlanets := []string{"Earth	", "Venus	", "Mars	"}

	fmt.Println("Before function call:", spacedPlanets)
	hyperSpace(spacedPlanets)

	// nothing happens to the original array
	fmt.Println("After function call:", strings.Join(spacedPlanets, "->"))

	// slice types
	var terresterialPlanets newSliceType = []string{"Mercury", "Venus", "Earth", "Mars"}
	terresterialPlanets.showElements()

	// appending to slices
	appendToSlices()

}

type newSliceType []string

func (ns newSliceType) showElements() {
	for i := range ns {
		fmt.Println(i, ns[i])
	}
}

func hyperSpace(worlds []string) {
	fmt.Println("Inside function call, before loop:", worlds)

	//  this won't impact the actual array passed to the function
	worlds = []string{"Jupiter	", "Saturn	"}

	for i := range worlds {
		worlds[i] = strings.TrimSpace(worlds[i])
	}

	fmt.Println("Inside function call, after loop:", worlds)
}

func appendToSlices() {
	/*
		Appending to slices differs based on the underlying array capacity.
		If the array is out of capacity, appending will cause for a new array to be created
		with twice the size of the original array.
		Look below
	*/
	var firstSlice = []string{"One", "Two", "Three"}
	fmt.Printf("First Slice: length %v, capacity %v\n", len(firstSlice), cap(firstSlice))

	var sliceFirstSlice = firstSlice[:1]
	fmt.Printf("Sliced First Slice: length %v, capacity %v\n", len(sliceFirstSlice), cap(sliceFirstSlice))

	/*
		Slicing a slice will decrease it's length but not change the capacity of the underlying array.
		If we appened one element to 'firstSlice' a new array with double the capacity is created.
		That is not the case for slice 'sliceFirstSlice'.
	*/

	// doubles the capacity to 6
	firstSlice = append(firstSlice, "Four")
	fmt.Printf("Appended First Slice: length %v, capacity %v\n", len(firstSlice), cap(firstSlice))

	// nothing happens to the capacity
	sliceFirstSlice = append(sliceFirstSlice, "Four")
	fmt.Printf("Sliced First Slice: length %v, capacity %v\n", len(sliceFirstSlice), cap(sliceFirstSlice))

	// to avoid overwriting and overallocation, declaring slices with three-index slicing or use the make keyword.
	var newSlice = make([]string, 0, 4)                        // length of 0 with capacity  of 4
	newSlice = append(newSlice, "One", "Two", "Three", "Four") // appending more will cause a new array

	anotherSlice := newSlice[0:2:3] // new slice with capacity 3
	anotherSlice1 := newSlice[0:2]  // new slice with capacity 4

	fmt.Printf("NewSlice Slice: length %v, capacity %v\n", len(newSlice), cap(newSlice))
	fmt.Printf("AnotherSlice Slice: length %v, capacity %v\n", len(anotherSlice), cap(anotherSlice))
	fmt.Printf("AnotherSlice1 Slice: length %v, capacity %v\n", len(anotherSlice1), cap(anotherSlice1))
}
