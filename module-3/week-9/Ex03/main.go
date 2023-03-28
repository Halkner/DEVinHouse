package main

import "fmt"

func main() {
	var fruits = map[string]string{
		"maca":     "é uma fruta que cresce em arvore",
		"banana":   "é uma fruta amarela",
		"morango":  "O morango é uma fruta vermelha, cuja origem é a Europa",
		"melancia": "A melancia é uma fruta rasteira, originária da África",
	}

	fmt.Println("Banana: ", fruits["banana"])
	fmt.Println("Maçã: ", fruits["maca"])
	fmt.Println("Melancia: ", fruits["melancia"])
	fmt.Println("Morango: ", fruits["morango"])
}
