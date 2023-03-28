package main

import "fmt"

func main() {
	var input int

	fmt.Print("Digite um numero inteiro para ver o dia da semana equivalente: ")
	fmt.Scan(&input)

	switch input {
	case 1:
		fmt.Print("Domingo")
	case 2:
		fmt.Print("Segunda-feira")
	case 3:
		fmt.Print("Terça-feira")
	case 4:
		fmt.Print("Quarta-feira")
	case 5:
		fmt.Print("Quinta-feira")
	case 6:
		fmt.Print("Sexta-feira")
	case 7:
		fmt.Print("Sábado")
	default:
		fmt.Print("Valor inválido!")
	}
}
