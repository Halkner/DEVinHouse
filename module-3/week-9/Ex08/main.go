package main

import (
	"fmt"
	"lab/labmath"
)

func main() {
	var num int

	fmt.Print("Digite um número para saber se é primo: ")
	fmt.Scan(&num)

	if labmath.IsPrime(num) {
		fmt.Printf("%d é primo\n", num)
	} else {
		fmt.Printf("%d não é primo\n", num)
	}
}