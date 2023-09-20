package functions

func KelvinToCelsius(kelvin float64) float64 {
	return kelvin - 273.15
}

func CelsiusToFahrenheit(celsius float64) float64 {
	return ((celsius * 9.00) / 5.00) + 32.00
}

func KelvinToFahrenheit(kelvin float64) float64 {
	return CelsiusToFahrenheit(KelvinToCelsius(kelvin))
}
