package pointers

import "fmt"

type stats struct {
	level             int
	endurance, health int
}

type character struct {
	name string
	stat stats
}

func levelUp(s *stats) {
	s.level++

	s.endurance = 42 + (14 * s.level)
	s.health = 5 * s.endurance
}

func Interior() {
	player := character{name: "Mathias"}

	levelUp(&player.stat)

	fmt.Printf("Stats: %+v\n", player.stat)
}
