package main

import (
	"fmt"
 	"strings"
)

func main() {
	var texto string
	fmt.Print("Digite uma Palavra: ")
	fmt.Scanln(&texto)

	// Remove espaços em branco e converte para minúsculas
	texto = strings.ToLower(strings.ReplaceAll(texto, " ", ""))

	// Verifica se o texto é um palíndromo
	palindromo := true
	for i := 0; i < len(texto)/2; i++ {
		if texto[i] != texto[len(texto)-1-i] {
			palindromo = false
			break
		}
	}

	// Exibe o resultado
	if palindromo {
		fmt.Printf("%s é um palíndromo\n", texto)
	} else {
		fmt.Printf("%s não é um palíndromo\n", texto)
	}
}