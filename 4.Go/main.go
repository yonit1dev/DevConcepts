package main

import (
	"modules/basics"
	"modules/challenges"
	"modules/control"
	"modules/string_text"
	"modules/var_types"
	"modules/variables"
)

func main() {
	// runBasicsModule()
	// runControlModule()
	// runVariableModule()
	// runChallenges()
	// runTypesModule()
	runStringsModule()
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

// types module
func runTypesModule() {
	var_types.PrecisionPoints()
	var_types.Piggy()
	var_types.Integers()
	var_types.ModPiggy()
	var_types.BigNumbers()
}

// string and text module
func runStringsModule() {
	string_text.Texts()
	string_text.Aliases()
	string_text.StringManipulation()
	string_text.Conversions()
}
