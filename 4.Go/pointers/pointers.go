package pointers

import "fmt"

func Memory() {
	someString := "Ethiopia"

	pointerToSomeString := &someString

	fmt.Println("SomeString location using &", &someString)
	fmt.Println("PointerValue:", pointerToSomeString)
	fmt.Println("String value:", someString)
	fmt.Println("Dereferencing pointer value:", *pointerToSomeString)
}

func PointersforPointing() {
	// simple demo of pointes
	var administrator *string

	scolese := "Christopher J. Scolese"
	administrator = &scolese

	fmt.Printf("Address: %v and Value: %v\n", administrator, *administrator)

	bolden := "Charles F. Bolden"
	administrator = &bolden

	fmt.Printf("Address: %v and Value: %v\n", administrator, *administrator)

	// changing pointer values
	bolden = "Charles Frank Bolden Jr."
	fmt.Printf("Address: %v and Value: %v\n", administrator, *administrator)

	major := administrator
	*major = "Major General Charles Frank Bolden Jr."

	fmt.Printf("New Var Address: %v, New Var Value: %v and Old Var Value: %v\n", major, *major, *administrator)

	lightfoot := "Robert M. Lightfoot Jr."
	administrator = &lightfoot

	// makes a copy of the string that major stores
	charles := *major
	*major = "Some new administrator"

	fmt.Printf("Major: %v and Charles: %v\n", *major, charles)
}

func PointersWithStructs() {
	type person struct {
		name, superpower string
		age              int
	}

	timmy := &person{
		name:       "Timothy",
		age:        21,
		superpower: "Fly",
	}

	// structs provide automatic dereferencing
	fmt.Printf("Variable: %v and Value: %v\n", timmy, *timmy)
	fmt.Println("Superpower:", timmy.superpower)
}

func PointersWithArrays() {
	superpowers := &[3]string{"flight", "invisibility", "super strength"}

	// arrays also provide automatic dereferencing, not for slices and maps
	fmt.Println("Zero Index:", superpowers[0])
}
