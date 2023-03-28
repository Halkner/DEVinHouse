package main

import "fmt"

func main() {
	var num int
	fmt.Print("Digite um número para saber se é ímpar ou par: ")
	fmt.Scan(&num)

	if num%2 == 0 {
		fmt.Printf("%d é par.", num)
	} else {
		fmt.Printf("%d é ímpar.", num)
	}
}
