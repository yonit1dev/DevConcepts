package functions

import (
	"fmt"
	"math/rand"
	"time"
)

type kelvin float64
type sensor func() kelvin

func FakeSensor() kelvin {
	return kelvin(rand.Intn(151) + 150)
}

func RealSensor() kelvin {
	return 0
}

func MeasureTemp(samples int, s sensor) {
	for i := 0; i < samples; i++ {
		k := s()

		fmt.Printf("%vK\n", k)
		time.Sleep(time.Second)
	}
}

func Calibrate(s sensor, offset kelvin) sensor {
	return func() kelvin {
		return s() + offset
	}
}
