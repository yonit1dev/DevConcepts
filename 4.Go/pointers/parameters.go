package pointers

import "fmt"

type person struct {
	name, superpower string
	age              int
}

func (p *person) receiverBirthday() {
	p.age++
}

func birthday(p *person) {
	p.age++
}

func Parameters() {
	somePerson := &person{
		name:       "Some Person",
		superpower: "flying",
		age:        22,
	}

	fmt.Println("Before Birthday:", somePerson.age)

	birthday(somePerson)
	fmt.Println("After Birthday:", somePerson.age)

	somePerson.receiverBirthday()
	fmt.Println("After Receiver Birthday:", somePerson.age)
}
