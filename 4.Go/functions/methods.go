package functions

import "fmt"

func Types() {
	type kelvin float64
	var roomTemp kelvin = 20

	fmt.Println("Room Temperature:", roomTemp)

	/*
		types don't mix. an example below
		type celsuis float64
		type fahrenheit float64

		var firstTemp celsuis = 10
		var secondTemp fahrenheit = 20

		this operation doesn't work
			newTemp := firstTemp + secondTemp
		throws mismatched types celsuis and fahrenheit
	*/

}

type Kelvin float64
type Celsius float64
type Fahrenheit float64

func EnhancedKelvinToCelsius(kelvin Kelvin) Celsius {
	return Celsius(kelvin - 273.15)
}

func EnhancedCelsiusToFahrenheit(celsius Celsius) Fahrenheit {
	return Fahrenheit(((celsius * 9.00) / 5.00) + 32.00)
}

func EnhancedKelvinToFahrenheit(kelvin Kelvin) Fahrenheit {
	return Fahrenheit(EnhancedCelsiusToFahrenheit(EnhancedKelvinToCelsius(kelvin)))
}

// declaring methods on types
func (k Kelvin) ToCelsiusK() Celsius {
	return Celsius(k - 273.15)
}

func (c Celsius) ToFahrenheitC() Fahrenheit {
	return Fahrenheit(((c * 9.00) / 5.00) + 32.00)
}

func (k Kelvin) ToFahrenheitK() Fahrenheit {
	return Fahrenheit(EnhancedCelsiusToFahrenheit(EnhancedKelvinToCelsius(k)))
}
