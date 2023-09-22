package ood

import "fmt"

// embedding types withing structs to forward methods and fields
type report struct {
	sol int
	temperature
	weatherLocation
}

type temperature struct {
	high, low celsius
}

func (t temperature) avgTemp() float64 {
	return (float64(t.high) + float64(t.low)) / 2
}

type weatherLocation struct {
	lat, long float64
}

type celsius float64

func Composition() {
	ethLocation := weatherLocation{9.14500, 40.48967}
	ethTemp := temperature{high: 34.0, low: 18.0}

	report := report{15, ethTemp, ethLocation}
	fmt.Printf("Ethiopia's Weather Report: %+v\n", report)

	fmt.Println("Average Temp:", report.avgTemp())
}
