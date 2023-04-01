package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Minerador interface {
	minerar() float64
}

type MineradorDeBitcoin struct{}

func (m MineradorDeBitcoin) minerar() float64 {
	rand.Seed(time.Now().UnixNano())
	return rand.Float64() * 10.0
}

func main() {
	minerador := MineradorDeBitcoin{}

	valorMinerado := minerador.minerar()

	fmt.Printf("Valor minerado: %.2f Bitcoins\n", valorMinerado)
}
