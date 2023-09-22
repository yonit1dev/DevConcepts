package ood

import "fmt"

type coordinate struct {
	degrees, minutes, seconds float64
	direction                 rune
}

type location struct {
	lat, long string
}

func (c coordinate) toDecimal() string {
	sign := 1.0
	switch c.direction {
	case 'S', 'W', 's', 'w':
		sign = -1.0
	}

	return (fmt.Sprintf("%.5f", sign*(c.degrees+(c.minutes/60)+(c.seconds/60/60))))
}

func newLocation(lat, long coordinate) location {
	return location{lat.toDecimal(), long.toDecimal()}
}

func Coordinates() {
	// Ethiopia's coordinates 9°8'42'' N, 40°29'22.8'' E
	lat := coordinate{9, 8, 42, 'N'}
	long := coordinate{40, 29, 22.8, 'E'}

	fmt.Println(lat.toDecimal(), long.toDecimal())

	ethLocation := newLocation(lat, long)
	fmt.Println("Ethiopia's location:", ethLocation)

}
