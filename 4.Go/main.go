package main

import (
	"modules/basics"
	"modules/challenges"
	"modules/control"
	"modules/variables"
)

func main() {
	// runBasicsModule()
	// runControlModule()
	// runVariableModule()
	runChallenges()
}

// challenges
func runChallenges() {
	challenges.TicketGenerator()
}

// basics module
func runBasicsModule() {
	basics.Trial()
	basics.Greet()
	basics.Mars()
	basics.CalcTimeToMars()
	basics.TimeToMars2()
	basics.RandomNum()
	basics.Malacandra()
}

// control module
func runControlModule() {
	control.Cave()
	control.Mountain()
	control.Switch()
	control.CountDown()
	control.CountDownRandom()
	control.Guess()
}

// variables module
func runVariableModule() {
	variables.NewLoops()
}
