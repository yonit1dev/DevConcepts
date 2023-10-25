package collections

import "fmt"

func DemoArray() {
	var planets [8]string

	planets[0] = "Mercury"
	planets[1] = "Venus"
	planets[2] = "Earth"

	fmt.Println(planets)
	fmt.Println(planets[3] == "") // initialized to empty strings at first

	dwarfs := [5]string{"Ceres", "Pluto", "Haumea", "Makemake", "Eris"}

	fmt.Println(dwarfs)

	// modifying planets declaration
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

	fmt.Println("All Planets:", allPlanets)

	// loop over an array
	for i, planet := range allPlanets {
		fmt.Println(i, planet)
	}
}

func MoreOnArrays() {
	// dynamic literal initialization
	q := [...]int{1, 2, 3}
	fmt.Println(q)

}
