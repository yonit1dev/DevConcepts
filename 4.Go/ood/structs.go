package ood

import (
	"encoding/json"
	"fmt"
)

func Structs() {
	type location struct {
		latitude  float64
		longitude float64
	}

	ethNorth := location{latitude: 3, longitude: 15}
	fmt.Printf("%+v\n", ethNorth)
}

func Marshalling() {
	// customizing structs with tags
	type anotherLocation struct {
		Lat  float64 `json:"latitude"`
		Long float64 `json:"longitude"`
	}

	loc := anotherLocation{3, 15}
	locInBytes, _ := json.Marshal(loc)

	fmt.Println(string(locInBytes))
}
