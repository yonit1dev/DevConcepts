package main

import (
	"fmt"
	"modules/basics"
	"modules/collections"
	"modules/concurrency"
	"modules/control"
	"modules/errors"
	"modules/functions"
	godetails "modules/goDetails"
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
	// runStringsModule()
	// runFunctionModule()
	// runArrayModule()
	// runOODModule()
	// runPointersModule()
	// runErrorsModule()
	// runConcurrencyModule()
	// runBasicFnModule()
	runGoDetailsModule()
}

// challenges
func runChallenges() {
	// challenges.TicketGenerator()
	// challenges.VigenereCipher()
	// challenges.DrawTable()
	// challenges.ConwayGameOfLife()
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
	string_text.Caesar()
}

// functions module
func runFunctionModule() {
	// temperature convertor
	kelvin := 0.0
	anotherKelvin := 233.0

	celsius := functions.KelvinToCelsius(float64(kelvin))
	anotherCelsius := functions.KelvinToCelsius(float64(anotherKelvin))
	fahrenheit := functions.CelsiusToFahrenheit(celsius)
	anotherFahrenheit := functions.KelvinToFahrenheit(kelvin)

	fmt.Printf("%.2fK in Celsius: %.2f\n", kelvin, celsius)
	fmt.Printf("%.2fK in Celsius: %.2f\n", anotherKelvin, anotherCelsius)
	fmt.Printf("%.2fC in Fahrenheit: %.2f\n", celsius, fahrenheit)
	fmt.Printf("%.2fK in Fahrenheit: %.2f\n", kelvin, anotherFahrenheit)

	// methods
	functions.Types()

	var k functions.Kelvin = 0.0
	c := k.ToCelsiusK()
	fmt.Printf("Using methods on Kelvin, %.2fK is %.2f in celsius.\n", k, c)

	functions.MeasureTemp(5, functions.FakeSensor)

	calibration := functions.Calibrate(functions.RealSensor, 10)
	fmt.Println("Calibrated Temp:", calibration())
}

// arrays module
func runArrayModule() {
	// collections.DemoArray()
	// collections.Slices()
	// collections.DecMaps()
	// collections.WordCounter()
	collections.MoreOnArrays()
}

// ood module
func runOODModule() {
	// ood.Structs()
	// ood.Marshalling()
	// ood.Coordinates()
	// ood.Composition()
	// ood.RoverGPS()
	// ood.Interfaces()
}

// pointers module
func runPointersModule() {
	// pointers.Memory()
	// pointers.PointersforPointing()
	// pointers.PointersWithStructs()
	// pointers.PointersWithArrays()
	// pointers.Parameters()
	// pointers.Interior()
	// pointers.EchoFlag()
}

// errors module
func runErrorsModule() {
	// errors.ReturnError()
	errors.WritingToFile()
}

// concurrency module
func runConcurrencyModule() {
	// concurrency.Concurrent()
	concurrency.ChannelsCommunication()
}

// basic functionality module
func runBasicFnModule() {
	// basicfunctionality.CommandLineArgs()
	// basicfunctionality.DuplicateLines()
	// basicfunctionality.SecondEnhancedDuplicateLines()
	// basicfunctionality.GIFGenerator()
	// basicfunctionality.WebFn()
	// basicfunctionality.WebFnServer()
	// basicfunctionality.CountRequest()
	// basicfunctionality.PopulationCount()
}

// details module
func runGoDetailsModule() {
	// godetails.IntegerProps()
	// godetails.StringProps()
	// godetails.StringProcessing()
	// godetails.StringManipulation()
	// godetails.StringAnagrams("silent", "listen")
	// fmt.Println(godetails.RemoveSliceElements([]int{1, 2, 3, 4}, 1))
	// godetails.StructProps()
	// values := []int{54, 23, 4, 5}
	// godetails.InsertionSort(values)
	// fmt.Println(values)
	// godetails.JSONProps()
	godetails.RunSearch()

}
