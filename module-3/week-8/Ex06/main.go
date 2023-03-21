package main

import (
	"fmt"
	"math"
)

func main() {
	var base, expoente float64
	fmt.Print("Digite a base: ")
	fmt.Scanln(&base)
	fmt.Print("Digite o expoente: ")
	fmt.Scanln(&expoente)

	resultado := math.Pow(base, expoente)
	fmt.Printf("%.2f elevado a %.2f é igual a %.2f\n", base, expoente, resultado)
}