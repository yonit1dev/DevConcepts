package challenges

import "fmt"

type celsius float64
type fahrenheit float64

func (c celsius) toFahrenheit() fahrenheit {
	return fahrenheit(((c * 9.00) / 5.00) + 32.00)
}

func rowData(c celsius) string {
	f := c.toFahrenheit()
	return fmt.Sprintf("%-2v %6.2f %-2v %6.2f %v\n", "|", c, "|", f, "|")
}

func drawHeading() {
	// heading
	fmt.Println("=====================")
	fmt.Printf("%v %2v %6v %2v %6v\n", "|", "C", "|", "F", "|")
	fmt.Println("=====================")
}

func DrawTable() {

	drawHeading()

	// Celsius to Fahrenheit
	var initTempC celsius = -40.0
	var maxTempC celsius = 100.0

	for initTempC <= maxTempC {
		rowData(initTempC)
		initTempC += 5.0
	}
}
