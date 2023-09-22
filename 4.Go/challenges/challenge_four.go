package challenges

import (
	"fmt"
	"math/rand"
)

const (
	width  = 40
	height = 15
)

type Universe [][]bool

func (u Universe) NewUniverse(width, height int) [][]bool {
	matrix := make([][]bool, height)
	rows := make([]bool, width*height)

	for i := 0; i < height; i++ {
		matrix[i] = rows[i*width : (i+1)*width]
	}

	return matrix
}

func (u Universe) ShowUniverse() {
	if len(u) <= 0 {
		fmt.Println("Create a Universe first to show it!")
	} else {
		fmt.Println(u)
	}
}

func (u Universe) Seed(width int) {
	for rows := range u {
		for i := 0; i < width/4; i++ {
			randomCell := rand.Intn(width)
			if u[rows][randomCell] {
				continue
			} else {
				u[rows][randomCell] = true
			}

		}
	}
}

// Todo: Implement the game
func ConwayGameOfLife() {
	var newUni Universe
	newUni = newUni.NewUniverse(width, height)
	newUni.Seed(width)
	newUni.ShowUniverse()
}
